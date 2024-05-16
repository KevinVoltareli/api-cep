import { Request, Response } from "express";
import { FindAddressByCEPUseCase } from "./search-cep.usecase";

let Correios = require("node-correios");

let correios = new Correios();

export class FindAddressByCEPController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new FindAddressByCEPUseCase();

    try {
      const result = await useCase.execute(request.body);
      return response.json(result);
    } catch (err) {
      return response.status(500).json({ error: err });
    }
  }
}
