import { Link } from "react-router-dom";
import { PenTool, ShoppingBag, Type } from "react-feather";
import "./DashboardItems.css";
const DashboardItems = () => {
  return (
    <nav className="dashboard-items">
      <ul>
        <li>
          <i className="d-d-inline-block mx-2">
            <PenTool />
          </i>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <i className="d-d-inline-block mx-2">
            <Type />
          </i>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <i className="d-d-inline-block mx-2">
            <ShoppingBag />
          </i>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardItems;
