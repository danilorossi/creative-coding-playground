import React from 'react';
import {
  Typography,
  Slider,
} from '@material-ui/core';

function RangeSlider({
  onFieldValueChange,
  originalPayload,
  uiControlMeta,
}) {
  const {
    label,
    defaultValue,
    field,
    min,
    max,
    step
  } = uiControlMeta;
  const value = (originalPayload[field] || defaultValue);
  const onSliderChange = (evt, value) => {
    onFieldValueChange(field, value)
  };

  return (<>
    <Typography id="discrete-slider" gutterBottom>
      { label }
    </Typography>
    <Slider
      valueLabelDisplay="on"
      defaultValue={ value }
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={ step }
      onChangeCommitted={onSliderChange}
      marks
      min={ min }
      max={ max }
    />
  </>)
}

export default RangeSlider;
