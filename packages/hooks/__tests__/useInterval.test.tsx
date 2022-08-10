import { renderHook, act } from "@testing-library/react";
import { useInterval } from "..";

describe("Test useInterval", () => {
  it("should work as expected", () => {
    jest.useFakeTimers();

    const callback = jest.fn();
    const { result } = renderHook(() => useInterval(callback, 100));

    // Should not have been called immediately (has delay of 100ms)
    expect(callback).toBeCalledTimes(0);

    // Called once after 100ms
    jest.advanceTimersByTime(100);
    expect(callback).toBeCalledTimes(1);

    jest.advanceTimersByTime(100);
    expect(callback).toBeCalledTimes(2);

    act(() => {
      // Toggle running of interval timer to false (delay = 0)
      result.current();
    });

    // Isn't called in interval anymore
    jest.advanceTimersByTime(100);
    expect(callback).toBeCalledTimes(2);
  });
});
