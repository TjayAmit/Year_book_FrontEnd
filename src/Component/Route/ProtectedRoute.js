import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user }) => {
  if (user.loggedIn === true) {
    return <Navigate replace to="/home/" />;
  }
  if (user.loggedIn === false) {
    return <Navigate replace to="/login" />;
  }
  return <Navigate replace to="/DPLMHS-yearbook" />;
};

export default ProtectedRoute;
