const toCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9;

const toFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;

const tryConvert = (
  temperature: number,
  convert: typeof toCelsius | typeof toFahrenheit,
) => {
  const output = convert(temperature);
  return Math.round(output * 1000) / 1000;
};

export { toCelsius, toFahrenheit, tryConvert };
