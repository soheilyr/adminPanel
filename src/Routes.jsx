import { Routes as RT, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Posts from "./pages/Posts/Posts";
import SignUp from "./pages/SingUp/SignUp";
import NewPost from "./pages/NewPost/NewPost";
import ProtectedRoute from "./Routes/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./Routes/PublicRoute/PublicRoute";
import NotFound from "./pages/404/404";
const Routes = () => {
  return (
    <RT>
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path="/Login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route
          path="posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />

        <Route
          path="posts/new"
          element={
            <ProtectedRoute>
              <NewPost />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </RT>
  );
};

export default Routes;
