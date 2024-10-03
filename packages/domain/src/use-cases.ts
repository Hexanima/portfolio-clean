import createStyle from "./use-cases/page-styles/create-style";
import getAllStyles from "./use-cases/page-styles/get-all-styles";
import { UseCase } from "./utils/types/use-case";

export interface UseCaseDeclaration {
  authRequired?: boolean;
  useCase: UseCase;
}

export const UseCaseRecord: Record<string, UseCaseDeclaration> = {
  getAllStyles: {
    useCase: getAllStyles,
  },
  createStyle: {
    useCase: createStyle,
  },
};

export type UseCaseDependencies =
  (typeof UseCaseRecord)[keyof typeof UseCaseRecord]["useCase"];
