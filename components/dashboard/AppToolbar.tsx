import { Toolbar, Typography, Stack } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React from 'react';
import AppBreadcrumbs from './AppBreadcrumbs';

interface AppToolbarProps {
    reqs: {
        title: string,
        showBreadcrumb?: boolean,
        subtitle?: string,
        superscriptTitle?: string,

        /**
         * @example
         * 
         * To render out components specific to each page. Usually buttons but it takes anything that passes `JSX.Element`
         * 
         * actions: [
         *     <Button onClick={() => console.log("Clicked booton")} variant="contained" sx={{ mr: 0.5 }}>Testing...</Button>,
         *     <Button variant="contained" sx={{ mr: 0.5 }}>Testing...</Button>,
         *     <Button variant="contained" sx={{ mr: 0.5 }}>Testing...</Button>,
         * ]
         */
        actions?: JSX.Element[]
    }
}

// TODO: use https://next.material-ui.com/components/grid/
// instead this shenanigans of CSS I made here 🤷🏾‍♂️
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(3),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        paddingLeft: 0,
        paddingRight: 0,
    },
    [theme.breakpoints.down('lg')]: {
        alignItems: 'start',
        flexDirection: 'column',
        justifyContent: 'start',
        // marginBottom: theme.spacing(0),
    },
}));

const ActionsContainer = styled(Stack)(({ theme }) => ({
    alignSelf: "center",
    [theme.breakpoints.down('lg')]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down('md')]: {
        alignSelf: "start",
    },
}));

export default function AppToolbar(props: AppToolbarProps) {
    const { reqs: { superscriptTitle = "", title = "", subtitle = "", showBreadcrumb = true, actions = [] } } = props

    return (
        <>
            <StyledToolbar>
                <div>
                    {!!superscriptTitle && <Typography variant="caption" component="div" sx={{ mb: 1 }}>
                        {superscriptTitle}
                    </Typography>}
                    <Typography variant="h5" sx={{ fontWeight: (theme) => theme.typography.fontWeightMedium }}>
                        {title}
                    </Typography>
                    {!!subtitle && <Typography variant="subtitle2" component="div">
                        {subtitle}
                    </Typography>}
                    {showBreadcrumb && <AppBreadcrumbs />}
                </div>

                {!!actions.length &&
                    <ActionsContainer spacing={2} direction="row">
                        {actions.map((action, i) => <div key={i}>{action}</div>)}
                    </ActionsContainer>
                }
            </StyledToolbar>
        </>
    )
}