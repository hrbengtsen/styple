import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { TextArea } from "..";

describe("Test TextArea", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<TextArea />);

    expect(view).toMatchSnapshot();
  });
});
