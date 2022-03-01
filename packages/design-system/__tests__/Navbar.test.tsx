import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Navbar } from "..";

describe("Test Navbar", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Navbar
        brand={<>Basic navbar</>}
        content={<>Regular content</>}
        mobileContent={<>Mobile content</>}
      />
    );

    expect(view).toMatchSnapshot();
  });
});
