import { useState } from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Popover from '@mui/material/Popover';
import { ColorPicker as ReactColorPicker, useColor, Color } from "react-color-palette";

import "react-color-palette/lib/css/styles.css";

const ColorPicker = (props: { value: string, onChange: (hex: string) => void, width?: number, height?: number }) => {
    const { onChange = () => { }, value, width = 228, height = 114 } = props
    const [color, setColor] = useColor("hex", value || "#09ace4");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const handleColorChange = (_color: Color) => {
        onChange(_color.hex)
        return setColor(_color)
    }
    const open = Boolean(anchorEl);
    const id = open ? 'color-palette-popover' : undefined;

    return (
        <>
            <div aria-describedby={id}>
                <InputLabel>Color</InputLabel>
                <Button
                    onClick={handleClick}
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
                <ReactColorPicker width={width} height={height} color={color} onChange={(v) => handleColorChange(v as Color)} alpha hideRGB hideHSV />
            </Popover>
        </>
    )
}


export default ColorPicker;