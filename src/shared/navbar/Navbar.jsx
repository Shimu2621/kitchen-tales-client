import React from "react";
import Container from "../../utils/container/Container";
// import chafHat from "../../../public/chef-hat.png";
import bowl from "../../../public/bowl.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" bg-orange-100">
      <Container>
        <div className="navbar px-10  ">
          {/* <div className="container mx-auto"> */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/allRecipes">Recipes</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/author">Author</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutUs">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contactUs">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            {/* Logo Container */}
            <div className="relative w-[140px] h-[14vh]  items-center text-lg mt-0 ">
              <img
                src="https://img.freepik.com/premium-vector/illustration-cooking-logo-solid-background_852896-5187.jpg?w=360"
                alt="Logo"
                className="h-24 w-24 object-contain rounded-full "
              />
              <p className="absolute top-[75px] text-center font-bold text-sm lg:text-lg  text-amber-950 mt-2 font-cursive">
                Kitchen Tales
              </p>
            </div>
          </div>
          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex justify-center items-center space-x-6 text-center text-lg  px-1 font-cursive">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-700 font-bold"
                      : "text-amber-950 font-bold"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allRecipes"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-700 font-bold"
                      : "text-amber-950 font-bold"
                  }
                >
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-700 font-bold"
                      : "text-amber-950 font-bold"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/author"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-700 font-bold"
                      : "text-amber-950 font-bold"
                  }
                >
                  Author
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-700 font-bold"
                      : "text-amber-950 font-bold"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-700 font-bold"
                      : "text-amber-950 font-bold"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              {/* <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn text-amber-950 text-lg font-cursive bg-orange-500 hover:text-white hover:bg-amber-900">
              Join Us
              <span>
                <img src={bowl} alt="chef-hat" className="w-10" />
              </span>
            </button>
          </div>
          {/* </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
