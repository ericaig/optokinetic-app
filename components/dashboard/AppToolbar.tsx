import { Toolbar, Typography,Stack } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React from 'react';
import AppBreadcrumbs from './AppBreadCrumbs';

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

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        paddingLeft: 0,
        paddingRight: 0,
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
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    {!!subtitle && <Typography variant="subtitle2" component="div">
                        {subtitle}
                    </Typography>}
                    {showBreadcrumb && <AppBreadcrumbs />}
                </div>

                {actions.length &&
                    <Stack spacing={2} direction="row" alignSelf="center">
                        {actions.map((action, i) => <div key={i}>{action}</div>)}
                    </Stack>
                }
            </StyledToolbar>
        </>
    )
}