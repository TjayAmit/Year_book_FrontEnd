import React, { useEffect } from 'react';
import { Login } from '../Packages';

import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import RouteData from './RouteData.js';
import ProtectedRoute from './ProtectedRoute.js';
import useMain from '../Context/Main/MainContext';
import Layout from '../Pages/Layout';
import Index from '../LandingPage/Index';
import About from '../LandingPage/About';
import Contact from '../LandingPage/Contact';
import Register from '../Pages/Registration/Register';

const RouteComponent = () => {
  const { user } = useMain();
  const location = useLocation();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<ProtectedRoute user={user} />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="DPLMHS-yearbook" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/yearbook" element={<Yearbook />} /> */}

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
  );
};

export default RouteComponent;
