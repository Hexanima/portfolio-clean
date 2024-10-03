import { Router } from "express";
import { UseCaseRecord } from "app-domain";
import UseCaseHandler from "./usecase-handler";

export function createRouter(): Router {
  const router = Router();

  for (const name in UseCaseRecord) {
    console.log("Loading " + name)
    const { useCase } = UseCaseRecord[name];

    router.get("/" + name, UseCaseHandler(useCase));
  }

  return router;
}
