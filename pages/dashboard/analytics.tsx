import AppTitle from "@components/dashboard/AppTitle";
import AppToolbar from "@components/dashboard/AppToolbar";

export default function Analytics() {
    return <>
        <AppTitle title="Analytics" />
        <AppToolbar reqs={{
            title: "Analytics",
        }} />
        ANALYTICS PAGE
    </>
}