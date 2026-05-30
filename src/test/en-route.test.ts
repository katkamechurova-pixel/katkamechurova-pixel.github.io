import { describe, it, expect } from "vitest";
import { routes } from "../routes";

describe("English route", () => {
  it("exposes 'en' as a child route of the root", () => {
    const children = routes[0].children ?? [];
    const enRoute = children.find((c) => c.path === "en");
    expect(enRoute).toBeDefined();
  });
});
