import { Button, ButtonGroup, FormControl, FormLabel, Slider, Typography } from "@material-ui/core"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import Divider from "./Divider";
import ColorPicker from "./ColorPicker";

const ParticlesControls = () => {
    return (
        <>
            <FormControl fullWidth>
                <FormLabel>Movement direction</FormLabel>
                <ButtonGroup fullWidth disableElevation aria-label="outlined primary button group">
                    <Button startIcon={<ArrowBackOutlinedIcon />}>Left</Button>
                    <Button startIcon={<ArrowUpwardOutlinedIcon />}>Up</Button>
                    <Button startIcon={<ArrowDownwardOutlinedIcon />}>Down</Button>
                    <Button startIcon={<ArrowForwardOutlinedIcon />}>Right</Button>
                </ButtonGroup>
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

            <ColorPicker/>

        </>
    )
}

export default ParticlesControls