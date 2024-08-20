import { Avatar, Box, Button, Card, Flex, Table as ChakraTable, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Icon } from '@chakra-ui/react';
import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';
import { StarIcon } from '@chakra-ui/icons'; // Import star icons
import * as React from 'react';

type RowObj = {
  name: string[];
  artworks: number;
  rating: number;  
};

const columnHelper = createColumnHelper<RowObj>();

export default function Tableassign(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  let defaultData = tableData;
  
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'>
          WAITER
        </Text>
      ),
      cell: (info: any) => (
        <Flex align='center'>
          <Avatar
            src={info.getValue()[1]}
            w='30px'
            h='30px'
            me='8px'
          />
          <Text
            color={textColor}
            fontSize='sm'
            fontWeight='600'>
            {info.getValue()[0]}
          </Text>
        </Flex>
      )
    }),
    columnHelper.accessor('artworks', {
      id: 'artworks',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'>
          Table Number
        </Text>
      ),
      cell: (info) => (
        <Text
          color={textColorSecondary}
          fontSize='sm'
          fontWeight='500'>
          {info.getValue()}
        </Text>
      )
    }),
    columnHelper.accessor('rating', {
      id: 'rating',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'>
          RATING
        </Text>
      ),
      cell: (info) => {
        const rating = info.getValue();
        const stars = Array.from({ length: 5 }, (_, index) => {
          if (rating >= index + 1) {
            return <Icon key={index} as={StarIcon} color="yellow.400" />;
          } else if (rating > index && rating < index + 1) {
            return <Icon key={index} as={StarIcon} color="yellow.400" />;
          } else {
            return <Icon key={index} as={StarIcon} color="gray.300" />;
          }
        });
		
        return <Flex>{stars}</Flex>;
      }
    })
  ];
  
  const [data, setData] = React.useState(() => [ ...defaultData ]);
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
    <Card sx={{ p: 2, mt: 5, width: "100%" }}>
      <Flex direction='column' w='100%' overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex
          align={{ sm: "flex-start", lg: "center" }}
          justify='space-between'
          w='100%'
          px='22px'
          pb='20px'
          mb='10px'
          boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
          <Text color={textColor} fontSize='xl' fontWeight='600'>
            Table Assignees
          </Text>
          <Button variant='action'>See all</Button>
        </Flex>
        <Box>
          <ChakraTable variant='simple' color='gray.500' mt="12px">
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Th
                        key={header.id}
                        colSpan={header.colSpan}
                        pe='10px'
                        borderColor={borderColor}
                        cursor='pointer'
                        onClick={header.column.getToggleSortingHandler()}>
                        <Flex
                          justifyContent='space-between'
                          align='center'
                          fontSize={{ sm: '10px', lg: '12px' }}
                          color='gray.400'>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: '',
                            desc: '',
                          }[header.column.getIsSorted() as string] ?? null}
                        </Flex>
                      </Th>
                    );
                  })}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.slice(0, 11).map((row) => {
                return (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Td
                          key={cell.id}
                          fontSize={{ sm: '14px' }}
                          minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                          borderColor='transparent'>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </ChakraTable>
        </Box>
      </Flex>
    </Card>
  );
}
