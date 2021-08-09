import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Avatar from '@material-ui/core/Avatar';
import Stack from '@material-ui/core/Stack';
import Divider from './Divider';
import ColorPicker from './ColorPicker';

export default function DotControls() {
  const [dotDisplacement, setDotDisplacement] = useState('');

  const handleDotDisplacementChange = (event) => {
    setDotDisplacement(event.target.value);
  };

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

    {/* <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <Avatar alt="Remy Sharp" sx={{ width: 20, height: 20 }}>2</Avatar>
      <Avatar alt="Remy Sharp" sx={{ width: 40, height: 40 }}>40%</Avatar>
      <Avatar alt="Remy Sharp" sx={{ width: 60, height: 60 }}>60%</Avatar>
      <Avatar alt="Remy Sharp" sx={{ width: 80, height: 80 }}>80%</Avatar>
      <Avatar alt="Remy Sharp" sx={{ width: 100, height: 100 }}>100%</Avatar>
    </Stack> */}

    <Divider />

    <FormControl fullWidth>
      <InputLabel id="dot-displacement-delay">Displacement delay</InputLabel>
      <Select
        labelId="dot-displacement-delay"
        id="dot-displacement-select"
        value={dotDisplacement}
        label="Displacement delay"
        onChange={handleDotDisplacementChange}
      >
        {Array(5).fill(0).map((_, i) => <MenuItem key={i} value={i + 1}>{`${i + 1} seconds`}</MenuItem>)}
      </Select>
    </FormControl>

    <Divider />



    <ColorPicker />
  </>
}
