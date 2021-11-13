import { useState } from "react";
import { FormControl, FormLabel, Slider, ToggleButton, ToggleButtonGroup, Typography, Paper, styled } from "@mui/material"
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import ScreenLockRotationOutlinedIcon from '@mui/icons-material/ScreenLockRotationOutlined';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import Divider from "./Divider";
import ColorPicker from "./ColorPicker";
import { ACTIONS, useConfiguratorContext } from "@contexts/ConfiguratorContext";
import { SPIN_DIRECTIONS } from "@enums/directions";

const Control = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
}));

interface PagesCtrlProps {
    reqs?: {
        onColorChange?: (hex: string) => void
    }
}

const PageControls = (props: PagesCtrlProps) => {
    const { page: { color, speed, spin }, dispatch } = useConfiguratorContext()

    const handleMovementDirectionChange = (_: any, _val: SPIN_DIRECTIONS) =>
        dispatch({ type: ACTIONS.UPDATE_PAGE_SPIN_DIRECTION, payload: { spin: _val } })

    return (
        <Control aria-label="Page controls" elevation={0} sx={{ border: 1, borderColor: 'divider' }}>
            <FormControl fullWidth>
                <FormLabel>Spin direction</FormLabel>
                <ToggleButtonGroup color="primary" fullWidth size="small" value={spin} exclusive onChange={handleMovementDirectionChange}>
                    <ToggleButton value={SPIN_DIRECTIONS.ANTICLOCKWISE} key={SPIN_DIRECTIONS.ANTICLOCKWISE}>
                        <RotateLeftOutlinedIcon />&nbsp;Spin {SPIN_DIRECTIONS.ANTICLOCKWISE}
                    </ToggleButton>
                    <ToggleButton value={SPIN_DIRECTIONS.NONE} key={SPIN_DIRECTIONS.NONE}>
                        <ScreenLockRotationOutlinedIcon />&nbsp;No spinning
                    </ToggleButton>
                    <ToggleButton value={SPIN_DIRECTIONS.CLOCKWISE} key={SPIN_DIRECTIONS.CLOCKWISE}>
                        <RotateRightOutlinedIcon />&nbsp;Spin {SPIN_DIRECTIONS.CLOCKWISE}
                    </ToggleButton>
                </ToggleButtonGroup>
            </FormControl>

            <Divider />

            <FormControl fullWidth>
                <FormLabel id="rotate-speed-ctrl">
                    Spin speed&nbsp;
                    <Typography component="span" variant="caption">({speed})</Typography>
                </FormLabel>
                <Slider
                    value={speed}
                    getAriaValueText={(_val) => `${_val} pixels`}
                    aria-labelledby="rotate-speed-ctrl"
                    onChange={(_, v) => dispatch({ type: ACTIONS.UPDATE_PAGE_SPIN_SPEED, payload: { speed: v } })}
                    valueLabelDisplay="auto"
                />
            </FormControl>

            <Divider />

            <ColorPicker value={color} onChange={(v: string) => dispatch({ type: ACTIONS.UPDATE_PAGE_COLOR, payload: { color: v } })} />

        </Control>
    )
}

export default PageControls