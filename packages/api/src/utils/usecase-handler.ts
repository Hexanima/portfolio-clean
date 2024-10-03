import { UseCase } from "app-domain/dist/utils/type/use-case";
import { RequestHandler } from "express";
import DEPENDENCIES from "../dependencies";
export default function UseCaseHandler(
  useCase: UseCase,
): RequestHandler {
  return async (req, res) => {
    try {
        return res.status(200).json(await useCase(DEPENDENCIES, req))
    } catch (error) {
        res.status(500).json(error)
    }
  };
}
