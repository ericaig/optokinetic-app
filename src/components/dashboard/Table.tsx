import * as React from 'react';
import { alpha, Divider, IconButton, Menu, MenuItem, Paper, styled, Table as MuiTable, TableBody, TableCell, TableCellProps, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

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

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={false}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  

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
                            .map((row) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={row.code}>
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
                                                aria-controls="demo-customized-menu"
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                <MoreHoriz />
                                            </IconButton>

                                            <StyledMenu
                                                MenuListProps={{
                                                    'aria-labelledby': 'demo-customized-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
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
                                            </StyledMenu>
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
