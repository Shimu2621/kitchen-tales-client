import Container from "../../utils/container/Container";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className=" bg-blue-800">
      <Container>
        <div className="navbar  ">
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
              {/* <ul
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
              </ul> */}
            </div>
            {/* Logo Container */}
            <div className="flex flex-col justify-center   items-center text-lg  ">
              <img
                src="https://img.freepik.com/premium-vector/illustration-cooking-logo-solid-background_852896-5187.jpg?w=360"
                alt="Logo"
                className="h-16 w-16 object-contain rounded-full "
              />
              <p className="text-center font-normal text-sm lg:text-lg  text-orange-100 mt-2 font-cursive">
                Kitchen Tales
              </p>
            </div>
          </div>
          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <div className="relative">
              <span className="absolute left-3 top-1/3 items-center  text-gray-700">
                <CiSearch size={20} />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="px-10 py-3 w-[500px] rounded-md bg-white"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
