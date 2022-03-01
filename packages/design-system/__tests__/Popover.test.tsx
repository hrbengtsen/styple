import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Popover, Button } from "..";

describe("Test Popover", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Popover content={<>Popover content</>}>
        <Button>Popover trigger</Button>
      </Popover>
    );

    expect(view).toMatchSnapshot();
  });
});
