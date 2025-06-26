import Container from "../../utils/container/Container";
import bowl from "../../../public/bowl.png";
import { Link, NavLink, useNavigate } from "react-router";
import useAuthProvider from "../../utils/authProvider/authProvider";
import toast from "react-hot-toast";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthProvider();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success("You Logged Out successfully!");
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-orange-100 shadow-md">
      <Container>
        <div className="flex items-center justify-between py-3 px-4 lg:px-10">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Hamburger */}
            <div className="lg:hidden">
              <button onClick={toggleDropdown} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-950"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="relative flex items-center gap-2">
              <img
                src="https://img.freepik.com/premium-vector/illustration-cooking-logo-solid-background_852896-5187.jpg?w=360"
                alt="Logo"
                className="h-14 w-14 object-contain rounded-full"
              />
              <p className="text-base sm:text-lg font-bold font-cursive text-amber-950">
                Kitchen Tales
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-6 font-cursive text-lg text-amber-950 font-bold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-amber-700" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allRecipesPage"
                  className={({ isActive }) =>
                    isActive ? "text-amber-700" : ""
                  }
                >
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-amber-700" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/authors"
                  className={({ isActive }) =>
                    isActive ? "text-amber-700" : ""
                  }
                >
                  Author
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive ? "text-amber-700" : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) =>
                    isActive ? "text-amber-700" : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* User Section */}
          {user && user?.userPhoto ? (
            <div className="relative">
              <div tabIndex={0} role="button" className="avatar cursor-pointer">
                <div className="w-12 h-12 rounded-full">
                  <img src={user?.userPhoto} alt="user" />
                </div>
              </div>
              <ul className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md z-50">
                <li className="p-2 font-semibold">{user?.fullName}</li>
                <li className="px-2 py-1 hover:bg-orange-100">
                  <Link to="/profile">My Profile</Link>
                </li>
                {user.role === "admin" && (
                  <li className="px-2 py-1 hover:bg-orange-100">
                    <Link to="/admin/admin-home">Admin Panel</Link>
                  </li>
                )}
                <li
                  className="px-2 py-1 hover:bg-orange-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Log Out
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn text-amber-950 text-base font-cursive bg-orange-500 hover:text-white hover:bg-amber-900">
                  Join Us
                  <img src={bowl} alt="bowl" className="w-8 ml-2" />
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="lg:hidden px-4 pb-4">
            <ul className="space-y-2 text-base font-cursive text-amber-950 font-bold">
              <li>
                <NavLink to="/" onClick={toggleDropdown}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/allRecipesPage" onClick={toggleDropdown}>
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={toggleDropdown}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/authors" onClick={toggleDropdown}>
                  Author
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs" onClick={toggleDropdown}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactUs" onClick={toggleDropdown}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
