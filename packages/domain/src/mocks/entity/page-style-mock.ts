import { PageStyle } from "../../entities/pageStyle";

export function mockPageStyle(ops?: Partial<PageStyle>): PageStyle {
  return {
    id: "id",
    backgroundColor: "backgroundColor",
    fontColor: "fontColor",
    fontFamily: "fontFamily",
    name: "name",
    primaryColor: "primaryColor",
    secondaryColor: "secondaryColor",
    ...ops,
  };
}
