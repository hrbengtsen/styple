import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Text } from "..";

describe("Test Text", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Text>text</Text>);

    expect(view).toMatchSnapshot();
  });
});
