import { renderHook } from "@testing-library/react-hooks";
import { useMounted } from "..";

describe("Test useMounted", () => {
  it("should work as expected", () => {
    const { result } = renderHook(() => useMounted());
    expect(result.current).toBe(true);
  });
});
