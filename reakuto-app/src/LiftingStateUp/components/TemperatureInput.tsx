const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export type Scale = keyof typeof scaleNames;

const TemperatureInput = (props: {
  scale: Scale;
  temperature: number;
  onTemperatureChange: (temperatureInputted: number) => void;
}) => {
  const { scale, temperature, onTemperatureChange } = props;

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={Number.isNaN(temperature) ? '' : temperature}
        onChange={(e) => onTemperatureChange(Number(e.target.value))}
      />
    </fieldset>
  );
};

export default TemperatureInput;
