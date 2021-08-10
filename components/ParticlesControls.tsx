import { useState } from "react";
import { FormControl, FormLabel, Slider, ToggleButton, ToggleButtonGroup, Typography } from "@material-ui/core"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import Divider from "./Divider";
import ColorPicker from "./ColorPicker";

enum MovementDirectionsEnum {
    LEFT = "left",
    UP = "up",
    DOWN = "down",
    RIGHT = "right",
}

const ParticlesControls = () => {
    const [movementDirection, setMovementDirection] = useState(MovementDirectionsEnum.LEFT);

    const handleMovementDirectionChange = (_: any, _val: MovementDirectionsEnum) => {
        setMovementDirection(_val);
    }

    return (
        <>
            <FormControl fullWidth>
                <FormLabel>Movement direction</FormLabel>
                <ToggleButtonGroup color="primary" fullWidth size="small" value={movementDirection} exclusive onChange={handleMovementDirectionChange}>
                    <ToggleButton value={MovementDirectionsEnum.LEFT} key={MovementDirectionsEnum.LEFT}>
                        <ArrowBackOutlinedIcon />&nbsp;Left
                    </ToggleButton>
                    <ToggleButton value={MovementDirectionsEnum.UP} key={MovementDirectionsEnum.UP}>
                        <ArrowUpwardOutlinedIcon />&nbsp;Up
                    </ToggleButton>
                    <ToggleButton value={MovementDirectionsEnum.DOWN} key={MovementDirectionsEnum.DOWN}>
                        <ArrowDownwardOutlinedIcon />&nbsp;Down
                    </ToggleButton>
                    <ToggleButton value={MovementDirectionsEnum.RIGHT} key={MovementDirectionsEnum.RIGHT}>
                        <ArrowForwardOutlinedIcon />&nbsp;Right
                    </ToggleButton>
                </ToggleButtonGroup>
            </FormControl>

            <Divider />

            <FormControl fullWidth>
                <FormLabel id="particles-count-ctrl">
                    Particles count&nbsp;
                    <Typography component="span" variant="caption">(50)</Typography>
                </FormLabel>
                <Slider
                    defaultValue={50}
                    getAriaValueText={(_val) => `${_val} pixels`}
                    aria-labelledby="particles-count-ctrl"
                    // marks={marks}
                    valueLabelDisplay="auto"
                />
            </FormControl>

            <Divider />

            <FormControl fullWidth>
                <FormLabel id="particles-count-ctrl">
                    Size (min / max)&nbsp;
                    <Typography component="span" variant="caption">(10 / 50)</Typography>
                </FormLabel>
                <Slider
                    defaultValue={[10, 50]}
                    getAriaValueText={(_val) => `${_val} pixels`}
                    aria-labelledby="particles-count-ctrl"
                    valueLabelDisplay="auto"
                />
            </FormControl>

            <Divider />

            <FormControl fullWidth>
                <FormLabel id="movement-speed-ctrl">
                    Movement speed&nbsp;
                    <Typography component="span" variant="caption">(50)</Typography>
                </FormLabel>
                <Slider
                    defaultValue={50}
                    getAriaValueText={(_val) => `${_val} pixels`}
                    aria-labelledby="movement-speed-ctrl"
                    // marks={marks}
                    valueLabelDisplay="auto"
                />
            </FormControl>

            <Divider />

            <ColorPicker />

        </>
    )
}

export default ParticlesControls