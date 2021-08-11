import { FC } from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core"
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

interface AppDrawerProps {
    reqs: {
        drawerWidth: number,
        mobileOpen: boolean,
        handleDrawerToggle: () => void
    }
}

const AppDrawer: FC<AppDrawerProps> = (props) => {
    const { reqs: { drawerWidth, mobileOpen, handleDrawerToggle } } = props;

    const drawer = (
        <div>
            <Toolbar />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
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