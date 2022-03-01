import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Heading } from "..";

describe("Test Heading", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Heading>Test Heading</Heading>);

    expect(view).toMatchSnapshot();
  });
});
