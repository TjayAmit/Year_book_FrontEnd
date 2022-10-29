import {
  useMain,
  Router,
  Route,
  Routes,
  Outlet,
  Login,
  Layout,
  useEffect,
  PageNotFound,
  RouteData,
  ProtectedRoute,
} from '../Packges';

const CustomRoute = () => {
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
                  {RouteData.path.map(data => {
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

export default CustomRoute;
