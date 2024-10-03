import { User } from "../entities/user";
import { ServiceTemplate } from "./service-template";

export interface UserService extends ServiceTemplate<User> {
  getUsersByThemeId: (themeId: string) => Promise<User[]>;
}
