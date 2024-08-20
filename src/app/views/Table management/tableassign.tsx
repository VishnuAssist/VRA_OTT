import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton
} from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';

type RowObj = {
  name: string[];
  artworks: number;
  rating: number;  
};

const columnHelper = createColumnHelper<RowObj>();

export default function Tableassign(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  
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
          <Avatar
            src={info.getValue()[1]}
            sx={{ width: 30, height: 30, mr: 1 }}
          />
          <Typography variant="body2" fontWeight="600">
            {info.getValue()[0]}
          </Typography>
        </Grid>
      )
    }),
    columnHelper.accessor('artworks', {
      id: 'artworks',
      header: () => (
        <Typography variant="caption" color="textSecondary" align="center">
          Table Number
        </Typography>
      ),
      cell: (info) => (
        <Typography variant="body2" color="textSecondary">
          {info.getValue()}
        </Typography>
      )
    }),
    columnHelper.accessor('rating', {
      id: 'rating',
      header: () => (
        <Typography variant="caption" color="textSecondary" align="center">
          RATING
        </Typography>
      ),
      cell: (info) => {
        const rating = info.getValue();
        const stars = Array.from({ length: 5 }, (_, index) => {
          if (rating >= index + 1) {
            return <StarIcon key={index} sx={{ color: 'yellow' }} />;
          } else if (rating > index && rating < index + 1) {
            return <StarIcon key={index} sx={{ color: 'yellow' }} />;
          } else {
            return <StarIcon key={index} sx={{ color: 'grey' }} />;
          }
        });
        
        return <Grid container>{stars}</Grid>;
      }
    })
  ];
  
  const [data, setData] = React.useState(() => [ ...tableData ]);
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
          <Typography variant="h6">Table Assignees</Typography>
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
                        sx={{ cursor: 'pointer' }}
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
