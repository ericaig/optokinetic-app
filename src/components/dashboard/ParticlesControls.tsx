import { useState } from "react";
import { FormControl, FormLabel, Slider, ToggleButton, ToggleButtonGroup, Typography, Paper, styled, Box, Grid, Button } from "@material-ui/core"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import Divider from "./Divider";
import ColorPicker from "./ColorPicker";
import { useConfiguratorContext, ACTIONS } from "@contexts/ConfiguratorContext";
import { DIRECTIONS } from "@enums/directions";

const Control = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
}));

interface ParticlesCtrlProps {
    reqs?: {
        onColorChange?: (hex: string) => void
    }
}

const ParticlesControls = (props: ParticlesCtrlProps) => {
    const { particles: { count, size, speed, color, direction }, dispatch } = useConfiguratorContext()

    const handleMovementDirectionChange = (_: any, _val: DIRECTIONS) =>
        dispatch({ type: ACTIONS.UPDATE_PARTICLES_DIRECTION, payload: { direction: _val } })

    return (
        <Control aria-label="Particles control" elevation={0} sx={{ border: 1, borderColor: 'divider' }}>
            <FormControl fullWidth>
                <FormLabel>Movement direction</FormLabel>
                <ToggleButtonGroup color="primary" fullWidth size="small" value={direction} exclusive onChange={handleMovementDirectionChange}>
                    <ToggleButton value={DIRECTIONS.LEFT} key={DIRECTIONS.LEFT}>
                        <ArrowBackOutlinedIcon />&nbsp;Left
                    </ToggleButton>
                    <ToggleButton value={DIRECTIONS.UP} key={DIRECTIONS.UP}>
                        <ArrowUpwardOutlinedIcon />&nbsp;Up
                    </ToggleButton>
                    <ToggleButton value={DIRECTIONS.DOWN} key={DIRECTIONS.DOWN}>
                        <ArrowDownwardOutlinedIcon />&nbsp;Down
                    </ToggleButton>
                    <ToggleButton value={DIRECTIONS.RIGHT} key={DIRECTIONS.RIGHT}>
                        <ArrowForwardOutlinedIcon />&nbsp;Right
                    </ToggleButton>
                </ToggleButtonGroup>
            </FormControl>

            <Divider />

            <FormControl fullWidth>
                <FormLabel id="particles-count-ctrl">
                    Particles count&nbsp;
                    <Typography component="span" variant="caption">({count})</Typography>
                </FormLabel>
                <Slider
                    value={count}
                    min={0}
                    max={300}
                    getAriaValueText={(_val) => `${_val} pixels`}
                    aria-labelledby="particles-count-ctrl"
                    onChange={(_, v) => dispatch({ type: ACTIONS.UPDATE_PARTICLES_COUNT, payload: { count: v } })}
                    // marks={marks}
                    valueLabelDisplay="auto"
                />
            </FormControl>

            <Divider />

            <FormControl fullWidth>
                <FormLabel id="particles-count-ctrl">
                    Size (min / max)&nbsp;
                    <Typography component="span" variant="caption">({size.join(" / ")})</Typography>
                </FormLabel>
                <Slider
                    min={0}
                    max={50}
                    value={size}
                    onChange={(_, v) => dispatch({ type: ACTIONS.UPDATE_PARTICLES_SIZE, payload: { size: v } })}
                    getAriaValueText={(_val) => `${_val} pixels`}
                    aria-labelledby="particles-count-ctrl"
                    valueLabelDisplay="auto"
                />
            </FormControl>

            <Divider />

            <FormControl fullWidth>
                <FormLabel id="movement-speed-ctrl">
                    Movement speed&nbsp;
                    <Typography component="span" variant="caption">({speed})</Typography>
                </FormLabel>
                <Slider
                    value={speed}
                    getAriaValueText={(_val) => `${_val} pixels`}
                    aria-labelledby="movement-speed-ctrl"
                    onChange={(_, v) => dispatch({ type: ACTIONS.UPDATE_PARTICLES_SPEED, payload: { speed: v } })}
                    valueLabelDisplay="auto"
                />
            </FormControl>

            <Divider />

            <ColorPicker value={color} onChange={(v: string) => dispatch({ type: ACTIONS.UPDATE_PARTICLES_COLOR, payload: { color: v } })} />

        </Control>
    )
}

export default ParticlesControls