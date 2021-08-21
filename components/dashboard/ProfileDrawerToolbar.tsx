import React from "react"
import { Toolbar, Tooltip, Grid, Avatar, Typography } from "@material-ui/core"
import { styled } from '@material-ui/core/styles';
import Link from '../Link';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    flexGrow: 1,
    '@media all': {
        padding: theme.spacing(2),
        // minHeight: theme.spacing(12),
    }
}));

const GridStyles = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    margin: 0,
    borderRadius: theme.shape.borderRadius,
    '@media all': {
        margin: 0,
        padding: theme.spacing(1),
    },
    '& .MuiGrid-item': {
        margin: 0,
        padding: 0,
    },
}));

const GridItem = styled(Grid)(() => ({
    display: "flex",
    justifyContent: "center",
}));

export default function ProfileDrawerToolbar() {
    return (
        <StyledToolbar >
            <GridStyles container spacing={2}>
                <GridItem item xs alignItems="center">
                    <Avatar
                        alt="Remy Sharp"
                        src="https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2020/02/Thanos-MCU-The-Eternals.jpg?fit=1200%2C800&quality=80&ssl=1"
                        sx={{ width: 45, height: 45 }}
                    />
                </GridItem>
                <GridItem item xs={8} flexDirection="column">
                    <Typography variant="subtitle1">Eric Aighewi</Typography>
                    <div>
                        <Typography variant="subtitle2" component="span">Your plan: </Typography>
                        {/* <Typography variant="subtitle2" component="span" color="primary">Premium</Typography> */}
                        <Tooltip title="Change plan">
                            <Link underline="hover" color="primary" variant="subtitle2" href="/">
                                Demo
                            </Link>
                        </Tooltip>
                    </div>
                </GridItem>
            </GridStyles>
        </StyledToolbar>
    )
}