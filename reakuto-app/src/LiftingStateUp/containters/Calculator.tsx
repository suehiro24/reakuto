import { useState } from 'react';

import BoilingVerdict from 'LiftingStateUp/components/BoilingVerdict';
import TemperatureInput, {
  Scale,
} from 'LiftingStateUp/components/TemperatureInput';
import { toCelsius, toFahrenheit, tryConvert } from 'LiftingStateUp/utils';

const Calculator = () => {
  const [temperature, setTemperature] = useState<number>(NaN);
  const [scaleInputting, setScaleInputting] = useState<Scale>('c');

  const celsius =
    scaleInputting === 'c' ? temperature : tryConvert(temperature, toCelsius);
  const fahrenheit =
    scaleInputting === 'f'
      ? temperature
      : tryConvert(temperature, toFahrenheit);

  const setTemperatureWithScale =
    (scale: Scale) => (temperatureVal: number) => {
      setScaleInputting(scale);
      setTemperature(() => temperatureVal);
    };

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={setTemperatureWithScale('c')}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={setTemperatureWithScale('f')}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
};

export default Calculator;
