import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { SearchField } from "..";

describe("Test ScrollArea", () => {
  it("should render as expected", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");

    // @ts-ignore
    useStateSpy.mockImplementation((init) => [init, setState]);

    const keyPressed = jest.fn();

    const view: RenderResult = render(
      <SearchField
        query={""}
        setQuery={setState}
        keyPressed={keyPressed}
        placeholder="Search test.."
      />
    );
    expect(view).toMatchSnapshot();
  });

  it("should render reset Button if non-empty query", () => {});
});
