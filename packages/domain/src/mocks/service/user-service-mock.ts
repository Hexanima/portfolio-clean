import { User } from "../../entities/user";
import { UserService } from "../../services/user-service";
import { MockedServiceTemplate, mockService } from "./service-mock";

export function mockUserService(
  info?: User[],
): UserService & MockedServiceTemplate<User> {
  const serviceTemplate = mockService<User>(info);

  return {
    ...serviceTemplate,
    async getUsersByThemeId(themeId) {
      return this.info.filter((user: User) => user.preferredThemeId == themeId);
    },
  };
}
