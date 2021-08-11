import React, { FC, useState } from "react"
import { Toolbar, Box, Stack, Grid, Avatar, Typography } from "@material-ui/core"
import { styled } from '@material-ui/core/styles';
import Link from '../Link';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    flexGrow: 1,
    '@media all': {
        padding: theme.spacing(2),
        minHeight: theme.spacing(12),
    }
}));

const GridStyles = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.grey.A100,
    margin: 0,
    borderRadius: theme.shape.borderRadius,
    '@media all': {
        margin: 0,
        padding: theme.spacing(2),
    },
    '& .MuiGrid-item': {
        margin: 0,
        padding: 0,
    },
}));

const GridItem = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
}));

export default function ProfileDrawerToolbar() {
    return (
        <StyledToolbar >
            <GridStyles container spacing={2}>
                <GridItem item xs>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2020/02/Thanos-MCU-The-Eternals.jpg?fit=1200%2C800&quality=80&ssl=1"
                        sx={{ width: 56, height: 56 }}
                    />
                </GridItem>
                <GridItem item xs={8} flexDirection="column">
                    <Typography variant="h6">Eric Aighewi</Typography>
                    <div>
                        <Typography variant="subtitle2" component="span">Your plan: </Typography>
                        {/* <Typography variant="subtitle2" component="span" color="primary">Premium</Typography> */}
                        <Link underline="hover" color="primary" variant="subtitle2" href="/">
                            Demo
                        </Link>
                    </div>
                </GridItem>
            </GridStyles>
        </StyledToolbar>
    )
}