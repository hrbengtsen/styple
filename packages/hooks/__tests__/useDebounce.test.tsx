import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "..";

describe("Test useDebounce", () => {
  it("should work as expected", () => {
    jest.useFakeTimers();

    const callback = jest.fn();
    const { result } = renderHook(() => useDebounce(callback, 0, 200));

    // State should be set correctly and callback not called initially
    expect(result.current[0]).toBe(0);
    expect(callback).toBeCalledTimes(0);

    act(() => {
      // setState(5)
      result.current[1](5);
    });

    expect(result.current[0]).toBe(5);

    // Advance useDebounce timeout by 100ms, here callback should not have been called yet
    jest.advanceTimersByTime(100);
    expect(callback).toBeCalledTimes(0);

    // 200ms advanced which match the delay, as such callback should have been called once
    jest.advanceTimersByTime(100);
    expect(callback).toBeCalledTimes(1);
  });
});
