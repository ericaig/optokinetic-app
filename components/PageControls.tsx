import { useState } from "react";
import { FormControl, FormLabel, Slider, ToggleButton, ToggleButtonGroup, Typography } from "@material-ui/core"
import RotateRightOutlinedIcon from '@material-ui/icons/RotateRightOutlined';
import ScreenLockRotationOutlinedIcon from '@material-ui/icons/ScreenLockRotationOutlined';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import Divider from "./Divider";
import ColorPicker from "./ColorPicker";

enum SpinDirectionsEnum {
    LEFT = "left",
    NONE = "none",
    RIGHT = "right",
}

const PageControls = () => {
    const [movementDirection, setMovementDirection] = useState(SpinDirectionsEnum.NONE);

    const handleMovementDirectionChange = (_: any, _val: SpinDirectionsEnum) => {
        setMovementDirection(_val);
    }

    return (
        <>
            <FormControl fullWidth>
                <FormLabel>Spin direction</FormLabel>
                <ToggleButtonGroup color="primary" fullWidth size="small" value={movementDirection} exclusive onChange={handleMovementDirectionChange}>
                    <ToggleButton value={SpinDirectionsEnum.LEFT} key={SpinDirectionsEnum.LEFT}>
                        <RotateLeftOutlinedIcon />&nbsp;Spin left
                    </ToggleButton>
                    <ToggleButton value={SpinDirectionsEnum.NONE} key={SpinDirectionsEnum.NONE}>
                        <ScreenLockRotationOutlinedIcon />&nbsp;No spinning
                    </ToggleButton>
                    <ToggleButton value={SpinDirectionsEnum.RIGHT} key={SpinDirectionsEnum.RIGHT}>
                        <RotateRightOutlinedIcon />&nbsp;Spin right
                    </ToggleButton>
                </ToggleButtonGroup>
            </FormControl>

            <Divider />

            <FormControl fullWidth>
                <FormLabel id="rotate-speed-ctrl">
                    Spin speed&nbsp;
                    <Typography component="span" variant="caption">(50)</Typography>
                </FormLabel>
                <Slider
                    defaultValue={50}
                    getAriaValueText={(_val) => `${_val} pixels`}
                    aria-labelledby="rotate-speed-ctrl"
                    // marks={marks}
                    valueLabelDisplay="auto"
                />
            </FormControl>

            <Divider />

            <ColorPicker />

        </>
    )
}

export default PageControls