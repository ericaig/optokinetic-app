import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppBar from './AppBar';
import AppDrawer from './AppDrawer'

const drawerWidth = 280;

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
                <div id="portal-root"></div>
                {children}
            </Main>
        </Box>
    );
}
