export const randomInInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const rangeAsArray = (start: number, end: number, step = 1) => {
  const output = [];

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
