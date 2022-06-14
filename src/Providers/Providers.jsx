import ThemeProvider from "../context/Theme/Theme-context";
import AuthProvider from "../context/Auth/Auth-context";
import PostsProvider from "../context/posts/Posts-context";
import { BrowserRouter } from "react-router-dom";
const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </PostsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Providers;
