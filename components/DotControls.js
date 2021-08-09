import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from './Divider';

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function DotControls() {
  const [dotDisplacement, setDotDisplacement] = useState('');
  const [color, setColor] = useColor("hex", "#121212");
  // const [color, setColor] = useState(createColor("#000"));

  const handleDotDisplacementChange = (event) => {
    setDotDisplacement(event.target.value);
  };

  // const handleColorChange = (value) => {
  //   console.log("onChange=", value);
  //   setColor(value);
  // };

  return <>
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">Visibility</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Visible"
        />
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Not Visible"
        />
      </RadioGroup>
    </FormControl>

    <Divider />

    <FormControl component="fieldset" fullWidth>
      <Typography color={"textSecondary"} id="dot-size-ctrl" gutterBottom>
        Size <Typography component="span" variant="caption">(50)</Typography>
      </Typography>

      <Slider
        defaultValue={50}
        getAriaValueText={(_val) => `${_val} pixels`}
        aria-labelledby="dot-size-ctrl"
        // marks={marks}
        valueLabelDisplay="auto"
      />
    </FormControl>

    <Divider />

    <FormControl component="fieldset" fullWidth>
      <InputLabel id="dot-displacement-delay">Displacement delay</InputLabel>
      <Select
        labelId="dot-displacement-delay"
        id="dot-displacement-select"
        value={dotDisplacement}
        onChange={handleDotDisplacementChange}
      >
        {Array(5).fill(0).map((_, i) => <MenuItem key={i} value={i + 1}>{`${i + 1} seconds`}</MenuItem>)}
      </Select>
    </FormControl>

    <Divider />

    <FormControl component="fieldset" fullWidth>
      <InputLabel>Color</InputLabel>
      <ColorPicker width={456} height={228} color={color} onChange={setColor} alpha hideRGB hideHSV />
    </FormControl>
  </>
}
