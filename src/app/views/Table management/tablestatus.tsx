import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  LinearProgress
} from '@mui/material';
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md';
import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';

interface RowObj {
  name: string;
  status: string;
  date: string;
  progress: number;
}

const columnHelper = createColumnHelper<RowObj>();

export default function Tablestatus(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = 'text.primary';
  const borderColor = 'divider';
  let defaultData = tableData;

  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <Typography variant="caption" color="textSecondary" align="center">
          WAITER
        </Typography>
      ),
      cell: (info: any) => (
        <Grid container alignItems="center">
          <Typography color={textColor} variant="body2" fontWeight="700">
            {info.getValue()}
          </Typography>
        </Grid>
      )
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => (
        <Typography variant="caption" color="textSecondary" align="center">
          STATUS
        </Typography>
      ),
      cell: (info) => (
        <Grid container alignItems="center">
          {info.getValue() === 'Available' && <MdCheckCircle style={{ color: 'green', marginRight: 5 }} />}
          {info.getValue() === 'occupied' && <MdCancel style={{ color: 'red', marginRight: 5 }} />}
          {info.getValue() === 'reserved' && <MdOutlineError style={{ color: 'orange', marginRight: 5 }} />}
          <Typography color={textColor} variant="body2" fontWeight="700">
            {info.getValue()}
          </Typography>
        </Grid>
      )
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <Typography variant="caption" color="textSecondary" align="center">
          DATE
        </Typography>
      ),
      cell: (info) => (
        <Typography color={textColor} variant="body2" fontWeight="700">
          {info.getValue()}
        </Typography>
      )
    }),
    columnHelper.accessor('progress', {
      id: 'progress',
      header: () => (
        <Typography variant="caption" color="textSecondary" align="center">
          PROGRESS
        </Typography>
      ),
      cell: (info) => (
        <Grid container alignItems="center">
          <LinearProgress
            variant="determinate"
            color="primary"
            sx={{ height: 8, width: 108 }}
            value={info.getValue()}
          />
        </Grid>
      )
    })
  ];

  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true
  });

  return (
    <Card sx={{ p: 2, mt: 5, width: '100%' }}>
      <Grid container direction="column" spacing={2}>
        <Grid item container alignItems="center" justifyContent="space-between" sx={{ mb: 2, p: 2, boxShadow: 3 }}>
          <Typography variant="h6">Table Status</Typography>
          <Button variant="contained" color="primary">See all</Button>
        </Grid>
        <TableContainer>
          <MuiTable>
            <TableHead>
              <TableRow>
                {table.getHeaderGroups().map((headerGroup) => (
                  <React.Fragment key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableCell
                        key={header.id}
                        sortDirection={header.column.getIsSorted() ? header.column.getIsSorted() : false}
                        onClick={header.column.getToggleSortingHandler()}
                        sx={{ cursor: 'pointer', borderColor: borderColor }}
                      >
                        <Grid container justifyContent="space-between" alignItems="center">
                          <Typography variant="caption" color="textSecondary">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </Typography>
                          {{
                            asc: '🔼',
                            desc: '🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </Grid>
                      </TableCell>
                    ))}
                  </React.Fragment>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.slice(0, 11).map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </Grid>
    </Card>
  );
}
