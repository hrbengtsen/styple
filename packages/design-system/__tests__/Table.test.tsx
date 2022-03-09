import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "..";

describe("Test Table", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Table
        css={{
          maxWidth: "$4xl",
        }}
      >
        <Thead>
          <Tr>
            <Th>Prop</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>defaultOpen</Th>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>modal</Th>
          </Tr>
        </Tfoot>
      </Table>
    );

    expect(view).toMatchSnapshot();
  });
});
