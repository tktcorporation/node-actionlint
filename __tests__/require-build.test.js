import { describe, it, expect } from "vitest";

// Ensure built modules can be required from CommonJS context without ESM errors

describe("require built modules", () => {
  it("load get-lint-log without throwing", () => {
    expect(() => require("../build/get-lint-log.js")).not.toThrow();
  });
});
