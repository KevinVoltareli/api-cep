import { Router } from "express";
import { FindAddressByCEPController } from "../modules/search-cep.controller";

const controller = new FindAddressByCEPController();

const router = Router();

router.get("/endereco", (request, response) => {
  controller.handle(request, response);
});

export { router };
