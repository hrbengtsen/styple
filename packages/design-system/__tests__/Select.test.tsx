import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Select, SelectItem } from "..";

describe("Test Select", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Select defaultValue="1" size="md">
        <SelectItem value="1">Select 1</SelectItem>
        <SelectItem value="2">Select 2</SelectItem>
        <SelectItem value="3">Select 3</SelectItem>
      </Select>
    );

    expect(view).toMatchSnapshot();
  });
});
