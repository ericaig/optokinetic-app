import { Button, ButtonGroup, FormControl, FormLabel, Slider, Typography } from "@material-ui/core"
import RotateRightOutlinedIcon from '@material-ui/icons/RotateRightOutlined';
import ScreenLockRotationOutlinedIcon from '@material-ui/icons/ScreenLockRotationOutlined';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import Divider from "./Divider";
import ColorPicker from "./ColorPicker";

const PageControls = () => {
    return (
        <>
            <FormControl fullWidth>
                <FormLabel>Spin direction</FormLabel>
                <ButtonGroup fullWidth disableElevation aria-label="outlined primary button group">
                    <Button startIcon={<RotateLeftOutlinedIcon />}>Spin left</Button>
                    <Button startIcon={<ScreenLockRotationOutlinedIcon />}>No spinning</Button>
                    <Button startIcon={<RotateRightOutlinedIcon />}>Spin right</Button>
                </ButtonGroup>
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