import { beforeAll, describe, expect, test } from "vitest";
import {
  MockedServiceTemplate,
  mockService,
} from "../../mocks/service/service-mock";
import { PageStyle } from "../../entities/pageStyle";
import { mockPageStyle } from "../../mocks/entity/page-style-mock";
import { User } from "../../entities/user";
import { mockUser } from "../../mocks/entity/user-mock";
import { IsError } from "../../utils/errors/is-error";
import createStyle from "./create-style";
import { mockUserService } from "../../mocks/service/user-service-mock";
import { UserService } from "../../services/user-service";

describe("", () => {
  let pageStyle: MockedServiceTemplate<PageStyle>;
  let userService: UserService;
  let currentUser: User;
  beforeAll(async () => {
    userService = mockUserService([
      await mockUser({ id: "id1" }),
      await mockUser({ id: "id2", isAdmin: true, name: "Nico" }),
      await mockUser({ id: "id3" }),
    ]);
    pageStyle = mockService<PageStyle>([await mockPageStyle({ id: "id1" })]);
  });

  test("Given a valid admin, add a new style", async () => {
    currentUser = (await userService.findById("id2")) as User;

    if (!currentUser) throw new Error("Not found user");

    const newStyle: Omit<PageStyle, "id"> = {
      backgroundColor: "marron",
      fontColor: "marron",
      fontFamily: "marron",
      name: "marron",
      primaryColor: "marron",
      secondaryColor: "marron",
    };

    await createStyle(
      {
        styleService: pageStyle,
        userService,
        currentUser,
      },
      newStyle,
    );

    const result = pageStyle.info.find((item) => item.name == newStyle.name);

    if (!result) throw new Error("Not saved correctly");

    expect(result.backgroundColor).toBe(newStyle.backgroundColor);
    expect(result.fontColor).toBe(newStyle.fontColor);
    expect(result.fontFamily).toBe(newStyle.fontFamily);
    expect(result.name).toBe(newStyle.name);
    expect(result.primaryColor).toBe(newStyle.primaryColor);
    expect(result.secondaryColor).toBe(newStyle.secondaryColor);
  });

  test("Given a non admin user, should return an error", async () => {
    currentUser = (await userService.findById("id1")) as User;

    if (!currentUser) throw new Error("Not found user");

    const newStyle: Omit<PageStyle, "id"> = {
      backgroundColor: "marron",
      fontColor: "marron",
      fontFamily: "marron",
      name: "marron",
      primaryColor: "marron",
      secondaryColor: "marron",
    };

    const result = await createStyle(
      {
        styleService: pageStyle,
        userService,
        currentUser,
      },
      newStyle,
    );

    expect(result).toBeInstanceOf(Error);
  });

  test("Given a non existant user, should return an error", async () => {
    currentUser = mockUser({id: "none", isAdmin: true})

    if (!currentUser) throw new Error("Not found user");

    const newStyle: Omit<PageStyle, "id"> = {
      backgroundColor: "marron",
      fontColor: "marron",
      fontFamily: "marron",
      name: "marron",
      primaryColor: "marron",
      secondaryColor: "marron",
    };

    const result = await createStyle(
      {
        styleService: pageStyle,
        userService,
        currentUser,
      },
      newStyle,
    );

    expect(result).toBeInstanceOf(Error);
  });
});
