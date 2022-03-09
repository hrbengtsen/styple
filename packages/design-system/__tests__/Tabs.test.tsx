import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "..";

describe("Test Tabs", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Account tab content is here</TabsContent>
        <TabsContent value="tab2">Settings tab content is here</TabsContent>
      </Tabs>
    );

    expect(view).toMatchSnapshot();
  });
});
