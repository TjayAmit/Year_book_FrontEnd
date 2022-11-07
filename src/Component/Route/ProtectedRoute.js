import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user }) => {
  if (user.loggedIn) {
    return <Navigate replace to="/home/" />;
  }
  return <Navigate replace to="/Yearbook/Home" />;
};

export default ProtectedRoute;
