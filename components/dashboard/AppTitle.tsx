import Head from "next/head";

export default function AppTitle({ title = "" }) {
    return <Head>
        <title>
            Dashboard{!!title && `: ${title}`}
        </title>
    </Head>
}