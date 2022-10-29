//REACT
import React, { createContext, useState, useEffect, useContext } from 'react';

//CHAKRA
import {
  Avatar,
  Text,
  Box,
  Flex,
  Divider,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorIcon,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Stack,
  Heading,
  useFormControl,
  Textarea,
  SkeletonText,
  Select,
  Image,
  useMediaQuery,
  ChakraProvider,
  theme,
  useToast,
} from '@chakra-ui/react';

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
import RouteData from './Route/Route_Data.js';
import ProtectedRoute from './Route/Protected_Route.js';

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

//404
import PageNotFound from './404/PageNotFound.js';

//SIDEBAR
import Sidebar from '../Component/Pages/Component/Sidebar/Sidebar';

//PAGES
import Login from './Pages/Login/Login';
import Layout from './Pages/Layout.js';
import Dashboard from './Pages/Dashboard/Dashboard';
import Instructor from './Pages/Instructor/Instructor';
import Section from './Pages/Section/Section.js';
import Client from './Pages/Client/Client';
import Batch from './Pages/Batch/Batch';
import Header from './Pages/Component/Header/Header.js';

export {
  Avatar,
  Batch,
  BatchDeleteRequest,
  BatchGetRequest,
  BatchPostRequest,
  BatchPutRequest,
  Box,
  ChakraProvider,
  Client,
  ClientDeleteRequest,
  ClientGetRequest,
  ClientPostRequest,
  ClientPutRequest,
  createContext,
  Dashboard,
  Divider,
  Flex,
  FormControl,
  FormErrorIcon,
  FormHelperText,
  FormLabel,
  Heading,
  Header,
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
  RouteData,
  Text,
  Textarea,
  theme,
  useContext,
  useEffect,
  useFormControl,
  useMain,
  useMediaQuery,
  useNavigate,
  useProSidebar,
  useState,
  useToast,
};
