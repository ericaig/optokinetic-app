import React, { useState } from 'react';
import { Paper, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, Typography, styled } from '@mui/material';
import Divider from './Divider';
import ColorPicker from './ColorPicker';
import { ACTIONS, useConfiguratorContext } from '@contexts/ConfiguratorContext';

const Control = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function DotControls() {
  const { dot: { color, displacementDelay, enabled, size }, dispatch } = useConfiguratorContext()

  const handleDotDisplacementChange = (event: any) =>
    dispatch({ type: ACTIONS.UPDATE_DOT_DISPLACEMENT_DELAY, payload: { displacementDelay: event.target.value } })

  return <Control aria-label="Dot controls" elevation={0} sx={{ border: 1, borderColor: 'divider' }}>
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">Visibility</FormLabel>
      <RadioGroup row aria-label="position" name="position" value={enabled} onChange={(e) => dispatch({ type: ACTIONS.UPDATE_DOT_STATE, payload: { enabled: e.target.value === "true" } })}>
        <FormControlLabel
          value={true}
          control={<Radio color="primary" />}
          label="Visible"
        />
        <FormControlLabel
          value={false}
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
        value={size}
        getAriaValueText={(_val) => `${_val} pixels`}
        aria-labelledby="dot-size-ctrl"
        onChange={(_, v) => dispatch({ type: ACTIONS.UPDATE_DOT_SIZE, payload: { size: v } })}
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
        value={displacementDelay}
        label="Displacement delay"
        onChange={handleDotDisplacementChange}
      >
        {Array(5).fill(0).map((_, i) => <MenuItem key={i} value={i + 1}>{`${i + 1} seconds`}</MenuItem>)}
      </Select>
    </FormControl>

    <Divider />



    <ColorPicker value={color} onChange={(v: string) => dispatch({ type: ACTIONS.UPDATE_DOT_COLOR, payload: { color: v } })} />
  </Control>
}
