import { Button, Paper } from "@mui/material";
import AppTitle from "@components/dashboard/AppTitle";
import AppToolbar from "@components/dashboard/AppToolbar";
import { SaveOutlined } from "@mui/icons-material";
import Link from "@components/Link";
import useTranslation from "next-translate/useTranslation";
import Routes from "@utils/routes";

export default function EditClientPage(props: any) {
    const { t } = useTranslation('clients')

    const pageTitle = t("editClient")

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
                        LinkComponent={Link}
                        href={Routes.clientView("2208")}
                        disableElevation
                    >
                        {"Save changes"}
                    </Button>
                ]
            }} />
            <Paper elevation={0}>
                {"Save changes"}
                {JSON.stringify((props || { "empty": true }))}
            </Paper>

        </>
    )
}