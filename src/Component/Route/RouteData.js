import { BiTachometer } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { GiGraduateCap, GiTeacher } from 'react-icons/gi';
import { ImBooks } from 'react-icons/im';
import { RiBuildingFill } from 'react-icons/ri';
import { FaUserCircle, FaUserGraduate } from 'react-icons/fa';

import Batch from '../Pages/Batch/Batch';
import Book from '../Pages/Book/Book';
import Client from '../Pages/Client/Client';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Instructor from '../Pages/Instructor/Instructor';
import Section from '../Pages/Section/Section';
import User from '../Pages/User/User';

const RouteData = [
  {
    index: 1,
    icon: <MdDashboard />,
    href: '/',
    label: 'Dashboard',
    element: <Dashboard />,
  },
  {
    index: 2,
    icon: <GiGraduateCap />,
    href: '/batch',
    label: 'Batch',
    element: <Batch />,
  },
  {
    index: 2,
    icon: <ImBooks />,
    href: '/book',
    label: 'Books',
    element: <Book />,
  },
  {
    index: 3,
    icon: <GiTeacher />,
    href: '/instructor',
    label: 'Instructor',
    element: <Instructor />,
  },
  {
    index: 4,
    icon: <RiBuildingFill />,
    href: '/section',
    label: 'Section',
    element: <Section />,
  },
  {
    index: 5,
    icon: <FaUserGraduate />,
    href: '/client',
    label: 'Client',
    element: <Client />,
  },
  {
    index: 5,
    icon: <FaUserCircle />,
    href: '/user',
    label: 'User',
    element: <User />,
  },
];

export default RouteData;
