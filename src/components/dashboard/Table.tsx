import * as React from 'react';
import { Paper, Table as MuiTable, TableBody, TableCell, TableCellProps, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import TableRowActions, { TableRowActionInterface } from './TableRowActions';

export interface Column {
    field: string;
    label: string;
    minWidth?: number;
    fontWeight?: number;
    align?: TableCellProps['align'];
    // component?: React.ElementType<TableCellBaseProps>;
}

interface TablePropsInterface {
    columns: Column[],
    rows: any[],
    rowActions: TableRowActionInterface[],
    rowsPerPage?: number,
    currentPage?: number,
}

export default function Table({ rowsPerPage: rpp = 10, currentPage = 0, rows, rowActions, columns }: TablePropsInterface) {
    const [page, setPage] = React.useState(currentPage);
    const [rowsPerPage, setRowsPerPage] = React.useState(rpp);

    const handleChangePage = (_: any, newPage: number) => setPage(newPage)

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
                <MuiTable stickyHeader aria-label="sticky table" size="small">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.field}
                                    align={column.align}
                                // style={{
                                //     minWidth: column.minWidth,
                                //     fontWeight: column.fontWeight,
                                // }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}

                            {!!rowActions.length && <TableCell style={{ width: 80 }} />}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            const value = row[column.field];

                                            return (
                                                <TableCell
                                                    key={column.field}
                                                    style={{
                                                        fontWeight: column.fontWeight,
                                                    }}
                                                    align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}

                                        {!!rowActions.length && <TableCell align={'center'}>
                                            {<TableRowActions resource={row} actions={rowActions} id={index} />}
                                        </TableCell>}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
