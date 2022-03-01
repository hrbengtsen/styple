// Mock browser API for Radix Dropdown
export class PointerEvent extends Event {
  // @ts-ignore
  button: number;
  // @ts-ignore
  ctrlKey: boolean;

  // @ts-ignore
  constructor(type, props) {
    super(type, props);
    if (props.button != null) {
      this.button = props.button;
    }
    if (props.ctrlKey != null) {
      this.ctrlKey = props.ctrlKey;
    }
  }
}
