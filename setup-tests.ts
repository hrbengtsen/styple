import "@testing-library/jest-dom";

// Mock browser API's used internally in Radix

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
