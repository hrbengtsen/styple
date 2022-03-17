import * as React from "react";
import { render, screen } from "@testing-library/react";
import { useOnScreen } from "..";

function OnScreenExample() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isIntersecting = useOnScreen(ref);

  return (
    <div ref={ref}>
      <p>Intersecting: {isIntersecting ? "true" : "false"}</p>
    </div>
  );
}

describe("Test useOnScreen", () => {
  it("should work as expected", () => {
    // Mock IntersectionObserver
    const observe = jest.fn();
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve: jest.fn(),
      root: null,
      rootMargin: "",
      thresholds: [],
      disconnect: jest.fn(),
      takeRecords: jest.fn(),
    }));

    render(<OnScreenExample />);
    const p = screen.getByText(/Intersecting/i);

    // Element is not intersecting in test
    expect(p).toHaveTextContent("Intersecting: false");

    // Observing should have begun
    expect(observe).toHaveBeenCalled();
  });
});
