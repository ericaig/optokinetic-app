import * as React from 'react';
import { Button } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AppTitle from "@components/dashboard/AppTitle";
import AppToolbar from "@components/dashboard/AppToolbar";
import Link from "@components/Link";
import Routes from "@utils/routes";
import Table, { Column } from "@components/dashboard/Table";
import { DeleteOutlined, EditOutlined, FileCopyOutlined } from "@mui/icons-material";
import okCancelAlertDialog from '@utils/okCancelAlertDialog';

const columns: Column[] = [
    {
        field: 'surnames',
        label: 'Surnames',
        minWidth: 170,
        fontWeight: 700,
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

export default function ClientsListPage() {
    const pageTitle = "Clients"

    const alert = okCancelAlertDialog()

    const deleteAlert = okCancelAlertDialog({
        title: "GEEEENERRIC",
        body: "Are you sure you want to GEEEENERRIC this item?",
        okLabel: "Delete",
        isDestructiveAction: true,
        backdropDismissible: false,
    })

    const handleDelete = (resource: any) => {
        deleteAlert.present({
            ...deleteAlert.props,
            okCallback: async () => {
                console.log("GEEEENERRIC", resource)
            },
        })
    }

    const handleEdit = (resource: any) => {
        alert.present({
            title: "EDIT",
            body: "Are you sure you want to edit this item?",
            okCallback: async () => {
                console.log("EDIT", resource)
            },
        })
    }

    const handleDuplicate = (resource: any) => {
        alert.present({
            title: "Duplicate",
            body: "Are you sure you want to duplicate this item?",
            okCallback: async () => {
                console.log("DUPLICATE", resource)
            },
        })
    }

    return (
        <>
            <AppTitle title={pageTitle} />
            <AppToolbar reqs={{
                title: pageTitle,
                actions: [
                    <Button
                        startIcon={<PersonAddIcon />}
                        variant="contained"
                        LinkComponent={Link}
                        href={Routes.clientCreate}
                        disableElevation
                    >
                        {"Add new"}
                    </Button>
                ]
            }} />
            <Table
                columns={columns}
                rows={rows}
                rowActions={[
                    {
                        icon: EditOutlined,
                        onClick: handleEdit,
                        title: "Edit",
                    },
                    {
                        icon: FileCopyOutlined,
                        onClick: handleDuplicate,
                        title: "Duplicate",
                        dividerAfter: true,
                    },
                    {
                        icon: DeleteOutlined,
                        onClick: handleDelete,
                        title: "Delete",
                        destructive: true,
                    },
                ]}
            />

            {alert.output}
            {deleteAlert.output}
        </>
    )
}