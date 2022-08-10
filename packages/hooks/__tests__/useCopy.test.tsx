import { renderHook, act } from "@testing-library/react";
import { useCopy } from "..";

describe("Test useCopy", () => {
  it("should contain correct text", () => {
    const { result } = renderHook(() => useCopy("text to copy"));
    expect(result.current.text).toBe("text to copy");
  });

  it("should copy text", () => {
    const { result } = renderHook(() => useCopy("text to copy"));

    // Mock navigator.clipboard
    let clipboardData = "";
    const mockClipboard = {
      writeText: jest.fn((data) => {
        clipboardData = data;
      }),
      readText: jest.fn(() => {
        return clipboardData;
      }),
    };

    Object.assign(navigator, {
      clipboard: mockClipboard,
    });

    // Call copy
    act(() => {
      result.current.copy();
    });

    expect(result.current.copied).toBe(true);
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("text to copy");
    expect(navigator.clipboard.readText()).toBe("text to copy");
  });
});
