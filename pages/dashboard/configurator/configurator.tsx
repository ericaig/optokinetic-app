import { Button } from "@material-ui/core";
import LaunchIcon from '@material-ui/icons/Launch';
import AppTitle from "@components/dashboard/AppTitle";
import AppToolbar from "@components/dashboard/AppToolbar";
import Configurator from "@components/dashboard/Configurator";
import Link from "@components/Link";
import Routes from "@lib/routes";

export default function ConfiguratorPage() {
    const pageTitle = "Configurator"

    return (
        <>
            <AppTitle title={pageTitle} />
            <AppToolbar reqs={{
                title: pageTitle,
                actions: [
                    <Button
                        startIcon={<LaunchIcon />}
                        variant="contained"
                        disableElevation
                        LinkComponent={Link}
                        href={Routes.CONFIGURATOR_PREVIEW}
                        target="_blank"
                    >
                        {"Preview"}
                    </Button>
                ]
            }} />
            <Configurator />
        </>
    )
}