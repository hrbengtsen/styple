import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Tooltip, Button } from "..";

describe("Test Tooltip", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Tooltip content={<>Tooltip content</>}>
        <Button>Tooltip trigger</Button>
      </Tooltip>
    );

    expect(view).toMatchSnapshot();
  });
});
