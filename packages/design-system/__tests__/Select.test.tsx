import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Select } from "..";

describe("Test Select", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Select>
        <option>Select 1</option>
        <option>Select 2</option>
        <option>Select 3</option>
      </Select>
    );

    expect(view).toMatchSnapshot();
  });
});
