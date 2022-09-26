export const CalcMean = (input: number[]):number => {

  const sum = input.reduce( (a, b) => a + b, 0);
  const avg = Math.ceil((sum / input.length))

  return avg
}