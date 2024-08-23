import { beforeAll, describe, expect, test } from "vitest";
import {
  MockedServiceTemplate,
  mockService,
} from "../../mocks/service/service-mock";
import { PageStyle } from "../../entities/pageStyle";
import { mockPageStyle } from "../../mocks/entity/page-style-mock";
import getAllStyles from "./get-all-styles";

describe("GetAllStyles Test", () => {
  let pageStyle: MockedServiceTemplate<PageStyle>;
  beforeAll(async () => {
    pageStyle = mockService<PageStyle>([
      await mockPageStyle(),
      await mockPageStyle(),
      await mockPageStyle({ id: "id2" }),
      await mockPageStyle(),
    ]);
  });
  test("Given a request, should return all styles", async () => {
    const result = await getAllStyles({ styleService: pageStyle });
    expect(result.length).toBe(4);

    const specific = result.find((item) => item.id == "id2");
    expect(specific).toBeTruthy()
  });
});
