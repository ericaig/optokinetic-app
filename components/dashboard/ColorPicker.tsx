import { useState } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Popover from '@material-ui/core/Popover';
import { ColorPicker as ReactColorPicker, useColor, Color } from "react-color-palette";

import "react-color-palette/lib/css/styles.css";

// interface ColorPickerProps {
//     reqs?: {
//         onChange?: (hex: string) => void,
//         test?: string
//     }
// }

const ColorPicker = (props: any) => {
    const { onChange = () => {} } = props


    const [color, setColor] = useColor("hex", "#09ace4");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const handleColorChange = (value: any) => {
        console.log(value.hex);

        onChange(value.hex)

        return setColor(value)
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
                <ReactColorPicker width={228} height={114} color={color} onChange={handleColorChange} alpha hideRGB hideHSV />
            </Popover>
        </>
    )
}


export default ColorPicker;