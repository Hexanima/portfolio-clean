import { describe, expect, test } from "vitest";
import IsError from "./is-error";
import { Language } from "../../entities/language";

describe("IsError Test", () => {
  test("Given an error, should return true", () => {
    const err = new Error();
    const result = IsError(err);

    expect(result).toBe(true);
  });
  test("Given not an error, should return false", () => {
    const item: Language = {
      id: "id1",
      certificateUrl: "www.google.com",
      grade: "C2",
      title: "English",
    };

    const result = IsError(item);
    expect(result).toBe(false);
  });
});
