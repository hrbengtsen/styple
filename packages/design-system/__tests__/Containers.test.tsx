import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Container, Flex, Grid, Section } from "..";

describe("Test Container", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Container>content</Container>);

    expect(view).toMatchSnapshot();
  });
});

describe("Test Flex", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Flex>content</Flex>);

    expect(view).toMatchSnapshot();
  });
});

describe("Test Grid", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Grid>content</Grid>);

    expect(view).toMatchSnapshot();
  });
});

describe("Test Section", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Section>content</Section>);

    expect(view).toMatchSnapshot();
  });
});
