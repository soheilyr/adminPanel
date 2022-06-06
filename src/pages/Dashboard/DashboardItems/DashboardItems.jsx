import { Link } from "react-router-dom";
import "./DashboardItems.css";
const DashboardItems = () => {
  return (
    <nav className="dashboard-items">
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardItems;
