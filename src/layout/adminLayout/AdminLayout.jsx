import { Link, NavLink, Outlet } from "react-router";
import Navbar from "./Navbar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Navbar />
      <div className="drawer bg-gray-300  lg:drawer-open pt-2">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side p-2">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-blue-800 text-white rounded-md min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link to="/">Kitchen Tales</Link>
            </li>
            <li>
              <NavLink
                to="/admin/admin-home"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-all ${
                    isActive ? "text-blue-700 bg-white" : "text-white"
                  }`
                }
              >
                Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/recipe-management"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-all ${
                    isActive ? "text-blue-700 bg-white" : "text-white"
                  }`
                }
              >
                Recipe Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/blog-management"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-all ${
                    isActive ? "text-blue-700 bg-white" : "text-white"
                  }`
                }
              >
                Blog Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/user-management"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded  ${
                    isActive ? "text-blue-700 bg-white" : "text-white"
                  }`
                }
              >
                User Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/author-management"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded transition-all ${
                    isActive ? "text-blue-700 bg-white" : "text-white"
                  }`
                }
              >
                Author Management
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
