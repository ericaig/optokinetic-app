import { Button, Paper } from "@mui/material";
import AppTitle from "@components/dashboard/AppTitle";
import AppToolbar from "@components/dashboard/AppToolbar";
import { SaveOutlined } from "@mui/icons-material";
import useTranslation from "next-translate/useTranslation";

export default function ViewClientPage(props: any) {
    const { t } = useTranslation('clients')
    
    const pageTitle = t("viewClient")

    console.log(props);


    return (
        <>
            <AppTitle title={pageTitle} />
            <AppToolbar reqs={{
                title: pageTitle,
                actions: [
                    <Button
                        startIcon={<SaveOutlined />}
                        variant="contained"
                        disableElevation
                    >
                        {"Go back"}
                    </Button>
                ]
            }} />
            <Paper elevation={0}>
                {JSON.stringify((props || { "empty": true }))}
            </Paper>

        </>
    )
}