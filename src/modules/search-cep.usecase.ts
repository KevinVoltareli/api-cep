import { prismaClient } from "../infra/database/prismaClient";

type CEP = {
  id?: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

const Correios = require("node-correios");

const correios = new Correios();

export class FindAddressByCEPUseCase {
  constructor() {}

  async execute(data: CEP) {
    try {
      const verifyCep = data.cep;

      if (verifyCep.length !== 8) {
        throw new Error("CEP inválido. O CEP deve ter 8 caracteres.");
      }
      const address = await correios.consultaCEP({ cep: data.cep });

      if (address.erro) return;

      // Verificar se o CEP já existe no banco de dados
      let existingCEP = await prismaClient.eNDERECO.findFirst({
        where: {
          cep: address.cep,
        },
      });

      if (!existingCEP) {
        // Buscar na API dos Correios
        const address = await correios.consultaCEP({ cep: data.cep });

        // Salvar os dados do CEP no banco de dados
        existingCEP = await prismaClient.eNDERECO.create({
          data: {
            cep: address.cep,
            logradouro: address.logradouro,
            complemento: address.complemento,
            bairro: address.bairro,
            localidade: address.localidade,
            uf: address.uf,
            ibge: address.ibge,
            gia: address.gia,
            ddd: address.ddd,
            siafi: address.siafi,
          },
        });
      }

      return existingCEP;
    } catch (error) {
      throw new Error("Erro ao buscar ou salvar o CEP: " + error);
    }
  }
}
