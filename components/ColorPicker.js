import { useState } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Popover from '@material-ui/core/Popover';
import { ColorPicker as ReactColorPicker, useColor, toColor } from "react-color-palette";

import "react-color-palette/lib/css/styles.css";

const ColorPicker = () => {
    // const [open, setOpen] = useState(false);
    const [color, setColor] = useColor("hex", "#121212");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (event) => {
        setAnchorEl(null);
    }

    const handleColorChange = (value) => {
        setColor(value);
    }

    const handleManualColorChange = (value) => {
        const _color = value.target.value;

        // setColor()

        console.log("onChange=", toColor("hex", _color));
        // setColor(value);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'color-palette-popover' : undefined;

    return (
        <>
            <div aria-describedby={id} onClick={handleClick}>
                <InputLabel>Color</InputLabel>
                <Button
                    variant="outlined"
                    style={{ backgroundColor: color.hex }}
                    disableElevation
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <ReactColorPicker width={228} height={114} color={color} onChange={handleColorChange} alpha hideRGB hideHSV />
            </Popover>
        </>
    )
}


export default ColorPicker;