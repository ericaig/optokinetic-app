import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import AppBar from '../../components/dashboard/AppBar';
import AppDrawer from '../../components/dashboard/AppDrawer'

const drawerWidth = 300;

const Main = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(4),
    paddingTop: theme.spacing(16),
}));

export default function App({ children }: any) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
        <Box sx={{ display: 'flex' }}>

            <AppBar reqs={{ handleDrawerToggle }} />
            <AppDrawer reqs={{ drawerWidth, mobileOpen, handleDrawerToggle, }} />

            <Main component="main">
                {children}
            </Main>
        </Box>
    );
}
