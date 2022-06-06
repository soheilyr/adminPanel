import { Routes as RT, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/Login";
import Posts from "../pages/Posts";
import SignUp from "../pages/SingUp/SignUp";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { useContext } from "react";
import { authContext } from "../context/Auth-context";
const Routes = () => {
  const { isLoggedIn } = useContext(authContext);
  return (
    <RT>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute user={isLoggedIn}>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route
          path="/posts"
          element={
            <ProtectedRoute user={isLoggedIn}>
              <Posts />
            </ProtectedRoute>
          }
        />
      </Route>
    </RT>
  );
};

export default Routes;
