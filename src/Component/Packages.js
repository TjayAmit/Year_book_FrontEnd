import {
  ProSidebarProvider,
  useProSidebar,
  Menu,
  MenuItem,
  Sidebar,
} from 'react-pro-sidebar';

//CHACKRA
import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  MenuList,
  MenuButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  Textarea,
  Select,
  Spacer,
  Stack,
  Wrap,
  WrapItem,
  useMediaQuery,
} from '@chakra-ui/react';

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@chakra-ui/icons';

//PAGES
import Login from './Pages/Login/Login';

//COMPONENT
import CardComponent from './Pages/Component/Card/CardComponent';
import CustomFormController from './Pages/Component/CustomFormController/CustomFormController';
import CustomSelect from './Pages/Component/CustomSelect/CustomSelect';
import DeleteData from './Pages/Component/Delete/Delete';
import EditData from './Pages/Component/Edit/Edit';
import Header from './Pages/Component/Header/Header';
import LineGraph from './Pages/Component/LineGraph/LineGraph';
import TableComponent from './Pages/Component/Table/TableComponent';
import StudentProfile from './Pages/Component/StudentProfile/StudentProfile';

const toastvariant = 'top-accent';
const toastposition = 'top-center';

export {
  ArrowLeftIcon,
  ArrowRightIcon,
  Avatar,
  Box,
  Button,
  CardComponent,
  Center,
  ChevronLeftIcon,
  ChevronRightIcon,
  CustomFormController,
  CustomSelect,
  DeleteData,
  Divider,
  EditData,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Header,
  LineGraph,
  Login,
  TableComponent,
  Table,
  Tbody,
  Textarea,
  Th,
  Thead,
  Td,
  Text,
  Tooltip,
  Tr,
  Select,
  Stack,
  Spacer,
  Sidebar,
  StudentProfile,
  ProSidebarProvider,
  Wrap,
  WrapItem,
  toastposition,
  toastvariant,
  useMediaQuery,
  useProSidebar,
};
