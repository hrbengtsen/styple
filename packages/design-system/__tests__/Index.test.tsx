import * as DS from "../index";

describe("Test styple", () => {
  it("should have exports", () => {
    expect(typeof DS).toBe("object");
  });

  it("should not have undefined exports", () => {
    Object.keys(DS).forEach((exportKey) =>
      expect(DS[exportKey as keyof typeof DS]).toBeTruthy()
    );
  });
});
