import { Router } from "express";
import { UseCaseRecord } from "app-domain";
import UseCaseHandler from "./usecase-handler";

export function createRouter(): Router {
  const router = Router();

  for (const key in UseCaseRecord) {
    const { useCase } = UseCaseRecord[key];
    router.post(`/${key}`, UseCaseHandler(useCase));
  }

  return router;
}
