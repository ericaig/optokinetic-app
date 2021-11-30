import { Button, Paper } from "@mui/material";
import AppTitle from "@components/dashboard/AppTitle";
import AppToolbar from "@components/dashboard/AppToolbar";
import { SaveOutlined } from "@mui/icons-material";
import Link from "@components/Link";
import Routes from "@utils/routes";
import useTranslation from "next-translate/useTranslation";

export default function AddClientPage(props: any) {
    const { t } = useTranslation('clients')
    
    const pageTitle = t("addAClient")

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
                        // href={"/dashboard/customers/199/edit"}
                        href={Routes.clientEdit("2")}
                        disableElevation
                    >
                        {"CREATE"}
                    </Button>
                ]
            }} />
            <Paper elevation={0}>
                {"CREATE"}
                <div>{JSON.stringify((props || { "empty": true }))}</div>
            </Paper>

        </>
    )
}