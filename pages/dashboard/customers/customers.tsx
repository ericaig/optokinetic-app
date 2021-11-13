import { Button } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AppTitle from "@components/dashboard/AppTitle";
import AppToolbar from "@components/dashboard/AppToolbar";
import Link from "@components/Link";
import Routes from "@lib/routes";
import Table, { Column } from "@components/dashboard/Table";

const columns: Column[] = [
    {
        field: 'surnames',
        label: 'Surnames',
        minWidth: 170,
    },
    {
        field: 'name',
        label: 'Name',
    },
    {
        field: 'treatments',
        label: 'Treatments',
    },
];

interface Data {
    surnames: string;
    name: string;
    treatments: number;
}

function createData(
    surnames: string,
    name: string,
    treatments: number,
): Data {
    return { name, surnames, treatments }
}

const rows = [
    createData('Howe Sipes', 'Vernie', 1324171354),
    createData('Wilkinson Kutch', 'Jace', 1403500365),
    createData('Leuschke Rosenbaum', 'Hugh', 60483973),
    createData('Leffler Tremblay States', 'Nelle', 327167434),
    createData('Hirthe Trantow', 'Alene', 37602103),
    createData('Cremin Schuster', 'Isabelle', 25475400),
    createData('Harris Padberg', 'Federico', 83019200),
    createData('Buckridge Auer', 'Brock', 4857000),
    createData('Mayert Lind', 'Morgan', 126577691),
    createData('Heidenreich Ritchie', 'Roy', 126317000),
    createData('Jaskolski Jakubowski', 'Santino', 67022000),
    createData('Nienow Yundt Kingdom', 'Percy', 67545757),
    createData('Smith Hackett', 'Collin', 146793744),
    createData('Mitchell Ward', 'Irma', 200962417),
    createData('Feil Schuster', 'Mateo', 210147125),
];

export default function CustomersPage() {
    const pageTitle = "Customers"

    return (
        <>
            <AppTitle title={pageTitle} />
            <AppToolbar reqs={{
                title: pageTitle,
                actions: [
                    <Button
                        startIcon={<PersonAddIcon />}
                        variant="contained"
                        disableElevation
                        LinkComponent={Link}
                        href={Routes.CUSTOMER_CREATE}
                        target="_blank"
                    >
                        {"Add new"}
                    </Button>
                ]
            }} />
            <Table
                columns={columns}
                rows={rows}
            />
        </>
    )
}