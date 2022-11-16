import React from 'react';
import { Login } from '../Packages';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import RouteData from './RouteData.js';
import ProtectedRoute from './ProtectedRoute.js';
import useMain from '../Context/Main/MainContext';
import Layout from '../Pages/Layout';
import Index from '../LandingPage/Index';
import About from '../LandingPage/About';
import Contact from '../LandingPage/Contact';
import Yearbook from '../LandingPage/Yearbook';

const RouteComponent = () => {
  const { user } = useMain();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<ProtectedRoute user={user} />} />
          <Route path="/DPLMHS-yearbook" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/yearbook" element={<Yearbook />} /> */}

          <Route path="/login" element={<Login />} />

          <Route
            path="/home/*"
            element={
              <Layout>
                <Routes>
                  {RouteData.map(data => {
                    return (
                      <Route
                        key={data.index}
                        path={data.href}
                        element={data.element}
                      />
                    );
                  })}
                </Routes>
              </Layout>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouteComponent;
