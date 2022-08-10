import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Tooltip, TooltipProvider, Button } from '..';

describe('Test Tooltip', () => {
  it('should render as expected', () => {
    const view: RenderResult = render(
      <TooltipProvider>
        <Tooltip content={<>Tooltip content</>}>
          <Button>Tooltip trigger</Button>
        </Tooltip>
      </TooltipProvider>
    );

    expect(view).toMatchSnapshot();
  });
});
