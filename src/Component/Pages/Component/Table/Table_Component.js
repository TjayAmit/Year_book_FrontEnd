import {
  ArrowRightIcon,
  ArrowLeftIcon,
  Box,
  ChevronRightIcon,
  ChevronLeftIcon,
  Edit,
  Delete,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  useTable,
  usePagination,
} from '../../../Packages';

const TableComponent = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const CustomBtnTheme = {
    backgroundColor: '#9AE6B4',
    borderRadius: '52px',
    fontSize: '20px',
  };
  let i = 0;
  return (
    <>
      <Box
        float={['center', 'center', 'right']}
        bg={'gray.200'}
        p={2}
        borderRadius={5}
      >
        <Flex>
          <Box fontSize={13}>Showing Page</Box>
          <Text fontWeight="bold" fontSize={13} ml={2} as="span">
            {pageIndex + 1}
          </Text>
          <Box ml={2} fontSize={13} w={'2rem'}>
            of
          </Box>

          <Text fontSize={13} fontWeight="bold" as="span">
            {pageOptions.length}
          </Text>
        </Flex>
      </Box>
      <Select
        w={32}
        mt={5}
        size={'sm'}
        value={pageSize}
        focusBorderColor={'gray.400'}
        borderRadius={5}
        onChange={e => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option fontSize={14} key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </Select>
      <div className="table-responsive">
        <Table
          mt={10}
          className={'table'}
          variant="unstyled"
          {...getTableProps()}
        >
          <Thead className="thead">
            {headerGroups.map(headerGroup => (
              <Tr fontSize={13} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th
                    className="thead"
                    fontSize={14}
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              i++;
              return (
                <Tr className="td" {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <Td {...cell.getCellProps()}>
                        {cell.column.id === 'action' ? (
                          <Flex columnGap={3}>
                            <Edit />
                            <Delete />
                          </Flex>
                        ) : cell.column.Header === 'ID' ? (
                          <Text fontWeight={'bold'} color={'green.600'}>
                            {i}
                          </Text>
                        ) : (
                          cell.render('Cell')
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>

      {page.length >= 1 ? (
        <div id="pagination">
          <div id="btnleft">
            <Tooltip label="First Page">
              <IconButton
                style={CustomBtnTheme}
                onClick={() => gotoPage(0)}
                isDisabled={!canPreviousPage}
                icon={<ArrowLeftIcon h={3} w={3} />}
                mr={4}
              />
            </Tooltip>
            <Tooltip label="Previous Page">
              <IconButton
                style={CustomBtnTheme}
                className="paginationbtn"
                onClick={previousPage}
                isDisabled={!canPreviousPage}
                icon={<ChevronLeftIcon h={6} w={6} />}
              />
            </Tooltip>
          </div>

          <div id="btnright">
            <Tooltip label="Next Page">
              <IconButton
                style={CustomBtnTheme}
                className="paginationbtn"
                onClick={nextPage}
                isDisabled={!canNextPage}
                icon={<ChevronRightIcon h={6} w={6} />}
              />
            </Tooltip>
            <Tooltip label="Last Page">
              <IconButton
                style={CustomBtnTheme}
                className="paginationbtn"
                onClick={() => gotoPage(pageCount - 1)}
                isDisabled={!canNextPage}
                icon={<ArrowRightIcon h={3} w={3} />}
                ml={4}
              />
            </Tooltip>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default TableComponent;
