import React, { FC } from "react"
import { Box, Divider, Drawer, List, ListItem, ListSubheader as MuiListSubheader, Button } from "@material-ui/core"
import { styled } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import CategoryIcon from '@material-ui/icons/Category';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ProfileDrawerToolbar from './ProfileDrawerToolbar';
import Link from '../Link';
import Routes from "../../lib/routes";

interface AppDrawerProps {
    reqs: {
        drawerWidth: number,
        mobileOpen: boolean,
        handleDrawerToggle: () => void
    }
}

const DrawerContainer = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(8),
}));

const MenuGroup = styled(Box)(({ theme }) => ({
    padding: `0 ${theme.spacing(2)} 0 ${theme.spacing(2)}`,

    '& .side-menu-item': {
        fontWeight: theme.typography.fontWeightMedium,
        '&.active': {
            color: theme.palette.primary.main,
        },
        '&:not(.active)': {
            color: theme.palette.secondary.main,
        }
    }
}));

const ListSubheader = styled(MuiListSubheader)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.typography.body1.color,
    textTransform: "uppercase",
    fontSize: theme.typography.caption.fontSize
}));

const AppDrawer: FC<AppDrawerProps> = (props) => {
    const { reqs: { drawerWidth, mobileOpen, handleDrawerToggle } } = props

    const handleMobileMenuToggler = () => (mobileOpen && handleDrawerToggle())

    const drawer = (
        <DrawerContainer>
            <ProfileDrawerToolbar />

            <Divider />

            <MenuGroup>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    aria-label="General"
                    subheader={
                        <ListSubheader disableGutters disableSticky>
                            General
                        </ListSubheader>
                    }
                >
                    <ListItem disablePadding disableGutters dense>
                        <Button
                            startIcon={<CategoryIcon />}
                            key="general-analytics-1"
                            href={Routes.DASHBOARD}
                            LinkComponent={Link}
                            aria-label="Overview"
                            variant="text"
                            fullWidth
                            className="side-menu-item"
                            onClick={handleDrawerToggle}
                            sx={{
                                padding: (theme) => {
                                    const _spX = theme.spacing(1)
                                    const _spY = theme.spacing(2 * .75)
                                    // 12px 8px 12px 16px
                                    return `${_spY} ${_spX} ${_spY} ${theme.spacing(2)}`
                                },
                                justifyContent: "start",
                                textTransform: "inherit",
                            }}
                        >
                            Overview
                        </Button>
                    </ListItem>
                    <ListItem disablePadding disableGutters dense>
                        <Button
                            startIcon={<InsertChartIcon />}
                            key="general-analytics-1"
                            href={Routes.ANALYTICS}
                            LinkComponent={Link}
                            aria-label="Analytics"
                            variant="text"
                            fullWidth
                            className="side-menu-item"
                            onClick={handleDrawerToggle}
                            sx={{
                                padding: (theme) => {
                                    const _spX = theme.spacing(1)
                                    const _spY = theme.spacing(2 * .75)
                                    // 12px 8px 12px 16px
                                    return `${_spY} ${_spX} ${_spY} ${theme.spacing(2)}`
                                },
                                justifyContent: "start",
                                textTransform: "inherit",
                            }}
                        >
                            Analytics
                        </Button>
                    </ListItem>
                    <ListItem disablePadding disableGutters dense>
                        <Button
                            startIcon={<SettingsIcon />}
                            key="general-analytics-1"
                            href={Routes.CONFIGURATOR}
                            LinkComponent={Link}
                            aria-label="Configurator"
                            variant="text"
                            fullWidth
                            className="side-menu-item"
                            onClick={handleDrawerToggle}
                            sx={{
                                padding: (theme) => {
                                    const _spX = theme.spacing(1)
                                    const _spY = theme.spacing(2 * .75)
                                    // 12px 8px 12px 16px
                                    return `${_spY} ${_spX} ${_spY} ${theme.spacing(2)}`
                                },
                                justifyContent: "start",
                                textTransform: "inherit",
                            }}
                        >
                            Configurator
                        </Button>
                    </ListItem>
                </List>
            </MenuGroup>

        </DrawerContainer>
    )

    return (
        <>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    // mobile view
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    // desktop view
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        width: drawerWidth,
                        flexShrink: 0,
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

// AppDrawer.propTypes = propTypes

export default AppDrawer