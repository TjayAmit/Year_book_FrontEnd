import { Navigate } from '../Packges';

const ProtectedRoute = ({ user }) => {
  if (user.loggedIn) {
    return <Navigate replace to="/home" />;
  } else {
    return <Navigate replace to="/login" />;
  }
};

export default ProtectedRoute;
