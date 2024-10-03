import { PageStyle } from "../../entities/pageStyle";
import { User } from "../../entities/user";
import { PageStyleService } from "../../services/page-style-service";
import { UserService } from "../../services/user-service";

export interface CreateStyleDependencies {
  styleService: PageStyleService;
  userService: UserService;
  currentUser: User;
}

export default async function createStyle(
  { styleService, userService, currentUser }: CreateStyleDependencies,
  payload: Omit<PageStyle, "id">,
) {
  const user = await userService.findById(currentUser.id);

  if (!user || !user.isAdmin) return new Error();

  const newStyle: PageStyle = { id: "temporal", ...payload };

  await styleService.add(newStyle);
}
