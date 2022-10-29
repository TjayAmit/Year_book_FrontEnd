import { BiTachometer } from 'react-icons/bi';
import { Dashboard, Instructor, Section, Batch, Client } from '../Packges';

const RouteData = {
  path: [
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
      href: '/',
      label: 'Instructor',
      element: <Instructor />,
    },
    {
      index: 3,
      icon: <BiTachometer />,
      href: '/',
      label: 'Batch',
      element: <Batch />,
    },
    {
      index: 4,
      icon: <BiTachometer />,
      href: '/',
      label: 'Section',
      element: <Section />,
    },
    {
      index: 5,
      icon: <BiTachometer />,
      href: '/',
      label: 'Client',
      element: <Client />,
    },
  ],
};

export default RouteData;
