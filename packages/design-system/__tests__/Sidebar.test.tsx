import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Sidebar } from "..";

describe("Test Sidebar", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Sidebar
        brand={<>Basic sidebar</>}
        content={<>Regular content</>}
        mobileContent={<>Mobile content</>}
      />
    );

    expect(view).toMatchSnapshot();
  });
});
