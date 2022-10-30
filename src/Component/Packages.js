//REACT
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useTable, usePagination } from 'react-table';

//CHAKRA
import {
  Avatar,
  Box,
  ChakraProvider,
  Divider,
  Text,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorIcon,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Select,
  SkeletonText,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
  Textarea,
  theme,
  useDisclosure,
  useFormControl,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@chakra-ui/icons';

//REACT ROUTER DOM
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
  Navigate,
} from 'react-router-dom';

//ROUTE DATA
import RouteData from './Route/RouteData.js';
import ProtectedRoute from './Route/ProtectedRoute.js';
import RouteComponent from './Route/RoutesComponent.js';

//PRO SIDEBAR
import { useProSidebar, ProSidebarProvider } from 'react-pro-sidebar';

//SERVER REQUEST
import {
  LoginRequest,
  RegisterRequest,
  LogoutRequest,
} from './API/Server_Request/Authentication_Request.js';

import {
  BatchPostRequest,
  BatchPutRequest,
  BatchDeleteRequest,
  BatchGetRequest,
} from './API/Server_Request/Batch_Request.js';

import {
  ClientDeleteRequest,
  ClientPostRequest,
  ClientGetRequest,
  ClientPutRequest,
} from './API/Server_Request/Client_Request.js';

import {
  InstructorDeleteRequest,
  InstructorPostRequest,
  InstructorGetRequest,
  InstructorPutRequest,
} from './API/Server_Request/Instructor_Request.js';

import {
  SectionDeleteRequest,
  SectionGetRequest,
  SectionPostRequest,
  SectionPutRequest,
} from './API/Server_Request/Section_Request';

//CONTEXT
import useMain from './Context/Main/MainContext.js';
import MainProvider from './Context/Main/MainProvider.js';

//404
import PageNotFound from './404/PageNotFound.js';

//SIDEBAR
import Sidebar from './Pages/Component/Sidebar/Sidebar';

//PAGES
import Login from './Pages/Login/Login';
import Layout from './Pages/Layout.js';
import Dashboard from './Pages/Dashboard/Dashboard';
import Instructor from './Pages/Instructor/Instructor';
import Section from './Pages/Section/Section.js';
import Client from './Pages/Client/Client';
import Batch from './Pages/Batch/Batch';

//PAGES COMPONENT
import Edit from './Pages/Component/Edit/Edit.js';
import Delete from './Pages/Component/Delete/Delete.js';
import Header from './Pages/Component/Header/Header.js';
import TableComponent from './Pages/Component/Table/Table_Component.js';
// import SearchNotFound from './Pages/Component/SearchNotFound/SearchNotFound.js';

export {
  Avatar,
  ArrowRightIcon,
  ArrowLeftIcon,
  Batch,
  BatchDeleteRequest,
  BatchGetRequest,
  BatchPostRequest,
  BatchPutRequest,
  Box,
  ChakraProvider,
  ChevronRightIcon,
  ChevronLeftIcon,
  Client,
  ClientDeleteRequest,
  ClientGetRequest,
  ClientPostRequest,
  ClientPutRequest,
  createContext,
  Dashboard,
  Delete,
  Divider,
  Edit,
  Flex,
  FormControl,
  FormErrorIcon,
  FormHelperText,
  FormLabel,
  Heading,
  Header,
  IconButton,
  Image,
  Instructor,
  InstructorDeleteRequest,
  InstructorGetRequest,
  InstructorPostRequest,
  InstructorPutRequest,
  Login,
  LoginRequest,
  LogoutRequest,
  Layout,
  MainProvider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Navigate,
  PageNotFound,
  ProtectedRoute,
  ProSidebarProvider,
  Section,
  SectionDeleteRequest,
  SectionGetRequest,
  SectionPostRequest,
  SectionPutRequest,
  // SearchNotFound,
  Sidebar,
  SkeletonText,
  Select,
  Stack,
  Outlet,
  React,
  RegisterRequest,
  Route,
  Router,
  Routes,
  RouteComponent,
  RouteData,
  TableComponent,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Textarea,
  theme,
  Tooltip,
  useContext,
  useDisclosure,
  useEffect,
  useFormControl,
  useMain,
  useMediaQuery,
  useNavigate,
  useProSidebar,
  useState,
  useToast,
  useTable,
  usePagination,
};
