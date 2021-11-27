import React from "react";
import { MoreHoriz, SvgIconComponent } from "@mui/icons-material";
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem as MenuItemMui, Typography } from "@mui/material";

interface TableRowActionsInterface {
    id: any,
    resource: any,
    actions?: TableRowActionInterface[],
}

export interface TableRowActionInterface {
    title: string,
    secondaryTitle?: string,
    icon: SvgIconComponent,
    dividerAfter?: boolean,
    destructive?: boolean,
    onClick: (resource: any) => void,
}

const MenuItem = ({ onClick, title, secondaryTitle, icon, dividerAfter = false, destructive = false, }: TableRowActionInterface) => {
    return <>
        <MenuItemMui onClick={onClick}>
            <ListItemIcon>
                {React.createElement(icon, { fontSize: "small", style: { color: destructive ? "red" : undefined } })}
            </ListItemIcon>

            <Typography variant="inherit" color={destructive ? "red" : undefined}>{title}</Typography>

            {!!secondaryTitle && <Typography variant="body2" color="text.secondary">
                &nbsp;{secondaryTitle}
            </Typography>}
        </MenuItemMui>

        {dividerAfter && <Divider sx={{ my: 0.5 }} />}
    </>
}

export default function TableRowActions({ id, resource, actions = [] }: TableRowActionsInterface) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    if (!actions.length) return <></>

    const handleOpenMenu = (event: any) => setAnchorEl(event.currentTarget)
    const handleCloseMenu = () => setAnchorEl(null)

    // const handleActionItemClick = 

    return <>
        <IconButton
            color="inherit"
            aria-label="actions"
            aria-controls={`row-options-opts-${id}`}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleOpenMenu}
            id={`row-options-btn-${id}`}
            size="large">
            <MoreHoriz />
        </IconButton>

        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            id={`row-options-opts-${id}`}
            keepMounted
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            MenuListProps={{
                'aria-labelledby': `row-options-btn-${id}`,
                role: 'listbox',
            }}
        >

            {actions.map((_props, index) =>
                <MenuItem
                    {..._props}
                    key={`row-action-${id}-${index}`}
                    onClick={() => {
                        const callback = _props?.onClick;

                        if (typeof callback === "function") callback(resource);
                        else console.log(`Expected TableRowAction to be function. But ${typeof callback} given.`)

                        handleCloseMenu()
                    }}
                />
            )}
        </Menu>
    </>
}