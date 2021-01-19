import React, { ChangeEventHandler, FunctionComponent } from 'react';

type Props = {
  disabled: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  min: number;
  max: number;
  value: number;
  list: string;
};

export const Slider: FunctionComponent<Props> = ({
  disabled,
  min,
  max,
  value,
  list,
  onChange,
}) => (
  <>
    <input
      className="slider"
      disabled={disabled}
      type="range"
      min={min}
      max={max}
      value={value}
      list={list}
      onChange={onChange}
    />
    <datalist id={list}>
      {_.range(min, max + 1).map((value, index) => {
        return <option key={index}>{value}</option>;
      })}
    </datalist>
  </>
);

export default Slider;
