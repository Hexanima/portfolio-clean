import getAllStyles from "./use-cases/page-styles/get-all-styles";
import { UseCase } from "./utils/type/use-case";

export interface UseCaseDeclaration {
  authRequired?: boolean;
  useCase: UseCase;
}

export const UseCaseRecord: Record<string, UseCaseDeclaration> = {
  getAllStyles: {
    useCase: getAllStyles,
  },
};
