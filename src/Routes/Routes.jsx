import { Routes as RT, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Posts from "../pages/Posts/Posts";
import SignUp from "../pages/SingUp/SignUp";
import NewPost from "../pages/NewPost/NewPost";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { useContext } from "react";
import { authContext } from "../context/Auth-context";
import NotFound from "../pages/404/404";
const Routes = () => {
  const { isLoggedIn } = useContext(authContext);
  return (
    <RT>
      <Route path="*" element={<NotFound />} />
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
          path="posts"
          element={
            <ProtectedRoute user={isLoggedIn}>
              <Posts />
            </ProtectedRoute>
          }
        />

        <Route
          path="posts/new"
          element={
            <ProtectedRoute user={isLoggedIn}>
              <NewPost />
            </ProtectedRoute>
          }
        />
      </Route>
    </RT>
  );
};

export default Routes;
