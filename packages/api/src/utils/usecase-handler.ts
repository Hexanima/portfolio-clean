import { UseCase, IsError } from "app-domain";
import { RequestHandler } from "express";
import { DEPENDENCIES } from "../dependencies";
export default function UseCaseHandler(useCase: UseCase): RequestHandler {
  return async (req, res) => {
    try {
      const result = await useCase({ ...DEPENDENCIES }, req.body);

      if (IsError(result)) return res.status(400).json(result);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
}
