import {
  Router,
  Route,
  Routes,
  RouteData,
  Outlet,
  Login,
  Layout,
  useEffect,
  PageNotFound,
  ProtectedRoute,
  useMain,
} from '../Packages';

const RouteComponent = () => {
  const { user } = useMain();

  useEffect(() => {}, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<ProtectedRoute user={user} />} />
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
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouteComponent;
