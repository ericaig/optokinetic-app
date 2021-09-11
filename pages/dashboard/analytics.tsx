import AppTitle from "@components/dashboard/AppTitle";
import AppToolbar from "@components/dashboard/AppToolbar";

export default function Analytics() {
    const pageTitle = "Analytics"

    return <>
        <AppTitle title={pageTitle} />
        <AppToolbar reqs={{
            title: pageTitle,
        }} />
        ANALYTICS PAGE
    </>
}