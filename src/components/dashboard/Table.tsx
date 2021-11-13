import * as React from 'react';
import { alpha, Divider, IconButton, Menu, MenuItem, Paper, styled, Table as MuiTable, TableBody, TableCell, TableCellProps, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export interface Column {
    field: string;
    label: string;
    minWidth?: number;
    fontWeight?: number;
    align?: TableCellProps['align'];
}

interface TablePropsInterface {
    columns: Column[],
    rows: any[],
    rowsPerPage?: number,
    currentPage?: number,
}

export default function Table({ rowsPerPage: rpp = 10, currentPage = 0, rows, columns }: TablePropsInterface) {
    const [page, setPage] = React.useState(currentPage);
    const [rowsPerPage, setRowsPerPage] = React.useState(rpp);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }


    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
                <MuiTable stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.field}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
                                        fontWeight: column.fontWeight,
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}

                            <TableCell align={'center'} />
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
                                                <TableCell key={column.field} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell
                                            align={'center'}
                                        >
                                            <IconButton
                                                color="primary"
                                                aria-label="actions"
                                                aria-controls="row-options"
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                                size="large">
                                                <MoreHoriz />
                                            </IconButton>

                                            <Menu
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                id="row-options"
                                                keepMounted
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose} disableRipple>
                                                    <EditIcon />
                                                    Edit
                                                </MenuItem>
                                                <MenuItem onClick={handleClose} disableRipple>
                                                    <FileCopyIcon />
                                                    Duplicate
                                                </MenuItem>
                                                <Divider sx={{ my: 0.5 }} />
                                                <MenuItem onClick={handleClose} disableRipple>
                                                    <ArchiveIcon />
                                                    Archive
                                                </MenuItem>
                                                <MenuItem onClick={handleClose} disableRipple>
                                                    <MoreHorizIcon />
                                                    More
                                                </MenuItem>
                                            </Menu>
                                        </TableCell>
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
