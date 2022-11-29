import { useTable, usePagination } from 'react-table';
import { BiSearch } from 'react-icons/bi';
import { MdAddCircleOutline } from 'react-icons/md';
import Usermodal from '../../../Layouts/usermodal';
import notfound from '../../../../Asset/notfound.svg';
import { Progress } from '@chakra-ui/react';
import useMain from '../../../Context/Main/MainContext';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  Avatar,
  Box,
  Button,
  ChevronRightIcon,
  ChevronLeftIcon,
  EditData,
  DeleteData,
  Input,
  InputGroup,
  InputLeftElement,
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
  Center,
  Image,
} from '../../../Packages';
import User from '../../User/User';

const TableComponent = ({
  columns,
  data,
  search,
  setSearch,
  placeholder,
  button,
  callBack,
  AddNew,
  close,
  setClose,
  loading,
  setLoading,
  setFetch,
  Update,
  notif,
  batchData,
  sectionData,
  InstructorData,
}) => {
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

  let i = 0;
  const { Instructor, userData } = useMain();
  return (
    <>
      <Box w={'100%'}>
        <Flex h={'40px'} justifyContent={'space-between'}>
          <Box w={'15rem'} h={'20px'} mt={5}>
            {button == 'User' ? (
              ''
            ) : (
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BiSearch />}
                />
                <Input
                  type={'text'}
                  value={search}
                  placeholder={placeholder}
                  fontSize={13}
                  focusBorderColor={'#120e63'}
                  onChange={e => setSearch(e.target.value)}
                  bg="rgba(0,0,0,0.1)"
                  border={'none'}
                  rounded={8}
                  _hover={{
                    bg: 'rgba(0,0,0,0.1)',
                    border: 'none',
                    rounded: 6,
                  }}
                  _focus={{
                    bg: 'white',
                    variant: 'unstyled',
                    border: 'none',
                    borderBottom: '1px solid grey',
                    rounded: 6,
                  }}
                />
              </InputGroup>
            )}
          </Box>
          <Flex columnGap={2}>
            {button == 'User' ? null : (
              <Usermodal
                AddNew={AddNew}
                BtnOpen={
                  <Button
                    bg={'#120e63'}
                    color={'white'}
                    _hover={{
                      bg: '#120e63',
                    }}
                    mt={5}
                    h={'32px'}
                    columnGap={2}
                    fontSize={'16'}
                    fontWeight={'400'}
                    onClick={callBack}
                  >
                    <MdAddCircleOutline size={'1.5rem'} />
                    {button}
                  </Button>
                }
                BtnSave={'Save ' + button}
                close={close}
                setClose={setClose}
                Type={button}
                loading={loading}
                setLoading={setLoading}
                batchData={batchData}
                sectionData={sectionData}
              />
            )}

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
          </Flex>
        </Flex>
      </Box>
      <div className="table-responsive">
        <Table
          mt={10}
          className={'table'}
          variant="unstyled"
          {...getTableProps()}
        >
          <Thead
            h={'50px'}
            className="thead"
            bg={'rgba(18,1,99,0.7)'}
            color="white"
            rounded={6}
          >
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
                <Tr
                  className="td"
                  {...row.getRowProps()}
                  _hover={{
                    transform: 'scale(1.005,1.005)',
                    transition: 'ease 0.2s',
                    bg: 'rgba(18,1,99,0.1)',
                    borderLeft: 'solid 2px green',
                  }}
                  borderBottom={'1px solid rgba(0,0,0,0.1)'}
                >
                  {row.cells.map(cell => {
                    return (
                      <Td {...cell.getCellProps()}>
                        {cell.column.id === 'action' ? (
                          <Flex columnGap={3}>
                            <EditData
                              Update={Update}
                              data={cell.row.original}
                              id={cell.row.original.id}
                              Type={button}
                              setFetch={setFetch}
                              BtnSave={'Update ' + button}
                              close={close}
                              setClose={setClose}
                              loading={loading}
                              setLoading={setLoading}
                              sectionData={sectionData}
                            />
                            <DeleteData
                              id={cell.row.original.id}
                              Type={button}
                              setFetch={setFetch}
                            />
                          </Flex>
                        ) : cell.column.Header === 'ID' ? (
                          <Text fontWeight={'bold'} color={'green.600'}>
                            {i}
                          </Text>
                        ) : cell.column.Header === 'PROFILE' ? (
                          <Avatar src={cell.value} />
                        ) : cell.column.Header === 'ROLE' ? (
                          <>
                            {button == 'User' ? (
                              <>
                                {cell.row.original.FK_role_ID == 1
                                  ? 'Admin'
                                  : cell.row.original.FK_role_ID == 2
                                  ? 'Instructor'
                                  : 'Student'}
                              </>
                            ) : (
                              <>
                                {cell.value == 0 ? (
                                  <Text>Admin</Text>
                                ) : cell.value == 1 ? (
                                  <Text>Instructor</Text>
                                ) : cell.value == 2 ? (
                                  <Text>Client</Text>
                                ) : null}
                              </>
                            )}
                          </>
                        ) : cell.column.Header === 'STATUS' ? (
                          <>
                            {cell.value == 0 ? (
                              <Text>PENDING</Text>
                            ) : cell.value == 1 ? (
                              <Text>ACTIVE</Text>
                            ) : (
                              <Text>DISSABLE</Text>
                            )}
                          </>
                        ) : cell.column.Header === 'NAME' ? (
                          <>
                            {button == 'User' ? (
                              <>
                                <span style={{ textTransform: 'uppercase' }}>
                                  {cell.row.original.iname == null
                                    ? ''
                                    : cell.row.original.iname}

                                  {cell.row.original.aname == null
                                    ? ''
                                    : cell.row.original.aname}
                                </span>
                              </>
                            ) : (
                              <>
                                {cell.row.original.Firstname +
                                  ' ' +
                                  cell.row.original.Lastname}
                              </>
                            )}
                          </>
                        ) : cell.column.Header === 'INSTRUCTOR' ? (
                          <>
                            {Instructor.filter(
                              x => x.Section_ID == cell.row.original.id
                            ).length >= 1 ? (
                              Instructor.filter(
                                x => x.Section_ID == cell.row.original.id
                              ).map(data => {
                                return (
                                  <>{data.Firstname + ' ' + data.Lastname}</>
                                );
                              })
                            ) : (
                              <>
                                <Text color={'gray.500'} fontSize={'14'}>
                                  No Instructor yet..
                                </Text>
                              </>
                            )}
                          </>
                        ) : cell.column.Header === 'SECTION' ? (
                          <>
                            {cell.row.original.Section_ID
                              ? sectionData
                                  .filter(
                                    x => x.value == cell.row.original.Section_ID
                                  )
                                  .map(s => {
                                    return s.label;
                                  })
                              : cell.render('Cell')}
                          </>
                        ) : cell.column.Header === 'Instructor' ? (
                          <>
                            {Instructor.filter(
                              x => x.FK_section_ID == cell.row.original.id
                            ).length >= 1 ? (
                              Instructor.filter(
                                x => x.FK_section_ID == cell.row.original.id
                              ).map(i => {
                                return (
                                  <>
                                    <span
                                      style={{ textTransform: 'uppercase' }}
                                    >
                                      {i.Firstname + ' ' + i.Lastname}
                                    </span>
                                  </>
                                );
                              })
                            ) : (
                              <>
                                <span
                                  style={{ fontSize: '13px', color: '#94202a' }}
                                >
                                  {' '}
                                  No Instructor yet..
                                </span>
                              </>
                            )}{' '}
                          </>
                        ) : cell.column.Header === 'Email' ? (
                          <>
                            {userData
                              .filter(x => x.id == cell.row.original.id)
                              .map(u => {
                                return <>{u.email}</>;
                              })}
                          </>
                        ) : cell.column.Header === 'Name and Description' ? (
                          <>
                            <span style={{ fontSize: '13px' }}>
                              <span
                                style={{
                                  fontWeight: 'bolder',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {cell.row.original.Name}
                              </span>
                              <br />
                              <span style={{ fontSize: '11px', color: 'grey' }}>
                                Description:
                              </span>
                              <br />
                              {cell.row.original.Description}
                            </span>
                          </>
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
        {page.length >= 1 ? null : (
          <>
            {notif && (
              <>
                <Box>
                  <Progress size="xs" isIndeterminate />
                </Box>
              </>
            )}
            <Box textAlign={'center'} mt={10}>
              <Center>
                <Box>
                  <Image src={notfound} width={'150px'} alt="Not found" />
                </Box>
                |<Text ml={2}>No Data Found .</Text>
              </Center>
            </Box>
          </>
        )}
      </div>

      {page.length >= 1 ? (
        <Box w={'96%'} ml={5} mr={5} mt={3}>
          <Flex justifyContent={'space-between'}>
            <div id="btnleft">
              <Tooltip label="First Page">
                <IconButton
                  bg={'lightgrey'}
                  rounded={100}
                  onClick={() => gotoPage(0)}
                  isDisabled={!canPreviousPage}
                  icon={<ArrowLeftIcon h={3} w={3} />}
                  mr={4}
                  _hover={{
                    color: '#120e63',
                  }}
                />
              </Tooltip>
              <Tooltip label="Previous Page">
                <IconButton
                  bg={'lightgrey'}
                  rounded={100}
                  className="paginationbtn"
                  onClick={previousPage}
                  isDisabled={!canPreviousPage}
                  icon={<ChevronLeftIcon h={6} w={6} />}
                  _hover={{
                    color: '#120e63',
                  }}
                />
              </Tooltip>
            </div>
            <Box bg={''} p={2} borderRadius={5}>
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

            <div id="btnright">
              <Tooltip label="Next Page">
                <IconButton
                  bg={'lightgrey'}
                  rounded={100}
                  border={'grey'}
                  className="paginationbtn"
                  onClick={nextPage}
                  isDisabled={!canNextPage}
                  icon={<ChevronRightIcon h={6} w={6} />}
                  _hover={{
                    color: '#120e63',
                  }}
                />
              </Tooltip>
              <Tooltip label="Last Page">
                <IconButton
                  bg={'lightgrey'}
                  rounded={100}
                  className="paginationbtn"
                  onClick={() => gotoPage(pageCount - 1)}
                  isDisabled={!canNextPage}
                  icon={<ArrowRightIcon h={3} w={3} />}
                  ml={4}
                  _hover={{
                    color: '#120e63',
                  }}
                />
              </Tooltip>
            </div>
          </Flex>
        </Box>
      ) : null}
    </>
  );
};

export default TableComponent;
