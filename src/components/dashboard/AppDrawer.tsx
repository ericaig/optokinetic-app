import React, { FC } from "react"
import { Box, Divider, Drawer, List, ListItem, ListSubheader as MuiListSubheader, Button, SvgIcon } from "@mui/material"
import { styled } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ProfileDrawerToolbar from './ProfileDrawerToolbar';
import Link from '../Link';
import Routes from "@lib/routes";

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

type SideMenu = {
    href: keyof typeof Routes,
    title: string,
    icon: typeof SvgIcon,
}

const SIDE_MENU_GROUP: { title: string, items: SideMenu[] }[] = [
    {
        title: "General",
        items: [
            {
                href: "DASHBOARD",
                title: "Overview",
                icon: CategoryIcon,
            },
            {
                href: "ANALYTICS",
                title: "Analytics",
                icon: InsertChartIcon,
            },
            {
                href: "CONFIGURATOR",
                title: "Configurator",
                icon: SettingsIcon,
            },
        ]
    },
    {
        title: "Management",
        items: [
            {
                href: "CUSTOMERS_LIST",
                title: "Customers",
                icon: PeopleIcon,
            },
        ]
    }
]

const AppDrawer: FC<AppDrawerProps> = (props) => {
    const { reqs: { drawerWidth, mobileOpen, handleDrawerToggle } } = props

    const handleMobileMenuToggler = () => (mobileOpen && handleDrawerToggle())

    const drawer = (
        <DrawerContainer>
            <ProfileDrawerToolbar />

            <Divider />

            <MenuGroup>
                {SIDE_MENU_GROUP.map(({ title, items }, index) => {
                    const groupKey = `${title.toLowerCase()}-${index}`

                    return <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        aria-label="General"
                        key={groupKey}
                        subheader={
                            <ListSubheader disableGutters disableSticky>
                                {title}
                            </ListSubheader>
                        }
                    >
                        {items.map((item, index2) => {
                            const itemKey = `${groupKey}-${item.title.toLowerCase()}-${index2}`

                            return <ListItem disablePadding disableGutters dense key={itemKey}>
                                <Button
                                    startIcon={<item.icon />}
                                    href={Routes[item.href]}
                                    LinkComponent={Link}
                                    aria-label={item.title}
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
                                    {item.title}
                                </Button>
                            </ListItem>
                        })}
                    </List>
                })}
            </MenuGroup>

        </DrawerContainer >
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