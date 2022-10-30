import { Dashboard, Instructor, Section, Batch, Client } from '../Packages';
import { BiTachometer } from 'react-icons/bi';

const RouteData = [
  {
    index: 1,
    icon: <BiTachometer />,
    href: '/',
    label: 'Dashboard',
    element: <Dashboard />,
  },
  {
    index: 2,
    icon: <BiTachometer />,
    href: '/instructor',
    label: 'Instructor',
    element: <Instructor />,
  },
  {
    index: 3,
    icon: <BiTachometer />,
    href: '/batch',
    label: 'Batch',
    element: <Batch />,
  },
  {
    index: 4,
    icon: <BiTachometer />,
    href: '/section',
    label: 'Section',
    element: <Section />,
  },
  {
    index: 5,
    icon: <BiTachometer />,
    href: '/client',
    label: 'Client',
    element: <Client />,
  },
];

export default RouteData;
