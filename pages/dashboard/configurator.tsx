import { Button } from "@material-ui/core";
import LaunchIcon from '@material-ui/icons/Launch';
import AppTitle from "../../components/dashboard/AppTitle";
import AppToolbar from "../../components/dashboard/AppToolbar";
import Configurator from "../../components/dashboard/Configurator";

export default function ConfiguratorPage() {
    return (
        <>
            <AppTitle title="Configurator" />
            <AppToolbar reqs={{
                title: "Configurator",
                actions: [
                    <Button
                        startIcon={<LaunchIcon/>}
                        variant="contained"
                        disableElevation
                    >
                        Load
                    </Button>
                ]
            }} />
            <Configurator/>
        </>
    )
}