import "@testing-library/jest-dom";
import { PointerEvent } from "./helpers";

// Mock browser API's used internally in Radix
// see https://github.com/radix-ui/primitives/issues/856#issuecomment-928704064

// @ts-ignore
global.PointerEvent = PointerEvent;

global.ResizeObserver = class ResizeObserver {
  cb: any;
  constructor(cb: any) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() {}
  disconnect() {}
};

global.DOMRect = {
  // @ts-ignore
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};
