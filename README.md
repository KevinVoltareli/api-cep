# API de Consulta de CEP dos Correios

  A API de Consulta de CEP dos Correios é um projeto que permite aos usuários buscar informações sobre endereços a partir do CEP fornecido. Instalação
Instalação

  1.	Clone este repositório em sua maquina local: git clone https://github.com/KevinVoltareli/api-cep
  2.	Navegue até o diretório do projeto: cd api-cep
  3.	Instale as dependências do projeto: npm install
     
# Como usar/configurações
## Prisma
1.	Caso deseje persistir os dados utilizando prisma, utilizar: npx prisma init e configurar a linha de acesso com login/senha/port/db
2.	Iniciar prisma para gerar suas tabelas: npx prisma migrate dev
3.	Iniciar servidor utilizando: npm run dev

## A Api estará disponível "http://localhost:3001"
## Endpoints Disponíveis
GET /endereco: Retorna informações sobre o endereço correspondente ao CEP fornecido. Passar via body json na sua requisição: { "cep":"insira_cep_aqui" } App disponível para testes na url: https://api-cep-nu.vercel.app/endereco

