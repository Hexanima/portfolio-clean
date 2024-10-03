import { User } from "../../entities/user";

export function mockUser(ops?: Partial<User>): User {
  return {
    id: "id",
    email: "email",
    isAdmin: false,
    name: "name",
    password: "password",
    preferredThemeId: "prefferredThemeId",
    ...ops,
  };
}
