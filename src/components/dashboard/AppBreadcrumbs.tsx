import React from "react";
import { useRouter } from "next/router";
import { styled } from '@mui/material/styles';
import { Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNextOutlined';
import Link from '../Link';
import Routes from "@utils/routes";

const AppBreadCrumbs = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(1),
}));

const breadcrumbPathMap = {
    '/': {
        icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        name: "Home"
    },
    [Routes.dashboard]: {
        icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        name: "Home"
    },
    [Routes.analytics]: {
        icon: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        name: "Analytics"
    },
}

export default function AppBreadcrumbs() {
    const router = useRouter();

    const linkPath = router.asPath.split('/');
    linkPath.shift();

    const _paths = linkPath.map((path, i) => {
        const href = '/' + linkPath.slice(0, i + 1).join('/')
        const _pathMap = breadcrumbPathMap[href]

        return { id: i, breadcrumb: _pathMap?.name || path, href, icon: _pathMap?.icon };
    });

    if (!_paths.length) return <></>;

    const _last = _paths.pop()

    return <>
        <AppBreadCrumbs role="presentation">
            <MuiBreadcrumbs aria-label="Breadcrumbs" separator={<NavigateNextIcon fontSize="small" />}>
                {_paths.map(_item =>
                    <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} style={{ textTransform: "capitalize" }} color="text.primary" variant="subtitle2" key={_item.id} href={_item.href}>
                        {_item.icon}{_item.breadcrumb}
                    </Link>
                )}

                {_last && <Typography sx={{ display: 'flex', alignItems: 'center' }} style={{ textTransform: "capitalize" }} color="inherit" variant="subtitle2">
                    {_last.icon}{_last.breadcrumb}
                </Typography>}
            </MuiBreadcrumbs>
        </AppBreadCrumbs>
    </>
}