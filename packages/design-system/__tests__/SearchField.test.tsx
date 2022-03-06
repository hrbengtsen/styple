import * as React from "react";
import { render, RenderResult, screen } from "@testing-library/react";
import { SearchField } from "..";

describe("Test SearchField", () => {
  let view: RenderResult;

  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");

  // @ts-ignore
  useStateSpy.mockImplementation((init) => [init, setState]);

  const keyPressed = jest.fn();

  beforeEach(() => {
    view = render(
      <SearchField
        query=""
        setQuery={setState}
        keyPressed={keyPressed}
        placeholder="Search test.."
      />
    );
  });

  it("should render as expected", () => {
    expect(view).toMatchSnapshot();
  });

  it("should render reset Button if non-empty query", () => {
    view.rerender(
      <SearchField
        query="search"
        setQuery={setState}
        keyPressed={keyPressed}
        placeholder="Search test.."
      />
    );

    const button: HTMLElement | null = screen.queryByRole("button");
    expect(button).toBeInTheDocument();
  });
});
