import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Radio, RadioGroup } from "..";

describe("Test Radio, RadioGroup", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <RadioGroup defaultValue="1">
        <Radio value="1" />
        <Radio value="2" />
      </RadioGroup>
    );

    expect(view).toMatchSnapshot();
  });
});
