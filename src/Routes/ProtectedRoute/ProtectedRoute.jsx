import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../context/Auth/Auth-context";
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(authContext);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
