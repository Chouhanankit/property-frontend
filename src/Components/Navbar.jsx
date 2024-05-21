import React, { useEffect, useState } from "react";
import logo from "../assets/Images/logo1.png";
import profile from "../assets/Images/profile.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { usersLogOut } from "../features/Auth/AuthSlice";

const Navbar = () => {
  // const user = false;
  const { users, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [isMobilemenu, setisMobilemenu] = useState(false);
  const [userdata, setuserdata] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutwithgoogle = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    dispatch(usersLogOut());
    navigate("/login");
  };

  const fetchUser = async () => {
    const response = await axios.get(
      "http://localhost:5000/auth/login/success",
      {
        withCredentials: true,
      }
    );
    setuserdata(response.data.user);
    console.log(userdata);
    return response.data;
  };

  useEffect(() => {
    fetchUser();
  }, [location.pathname === "/login" || "/register" || "/property/add"]);

  return (
    <nav className="bg-blue-700 border-b border-blue-500 sticky top-0 z-10 px-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setisMobilemenu((prev) => !prev)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center md:items-stretch md:justify-start">
            <Link to={"/"} className="flex items-center">
              <img className="w-10" src={logo} alt="" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Properties
              </span>
            </Link>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                <Link
                  to={"/"}
                  className={
                    location.pathname === "/"
                      ? "text-blue-300 bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Home
                </Link>

                <Link
                  to="/properties"
                  className={
                    location.pathname === "/properties"
                      ? "text-blue-300 bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }
                >
                  Properties
                </Link>

                {!userdata?.googleId && !users && location.pathname === "/property/add" ? (
                  navigate("/login ") && toast.error("Please login First")
                ) : (
                  <Link
                    to="/property/add"
                    className={
                      location.pathname === "/property/add"
                        ? "text-blue-300 bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    }
                  >
                    Add Property
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:block md:ml-6">
            <div className="flex items-center gap-4">
              {!userdata.googleId && !users ? (
                <Link
                  to={"/register"}
                  className="flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  <span className="flex gap-1">
                    {/* <img className="max-w-6" src={google} alt="icon" /> */}
                    <Link to={"/login"}>Login</Link>|
                    <Link to={"/register"}>Register</Link>
                  </span>
                </Link>
              ) : (
                <button
                  onClick={logoutwithgoogle}
                  className={
                    location.pathname === "/"
                      ? "flex items-center gap-2 text-white bg-blue-900 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2"
                      : "hidden"
                  }
                >
                  <span className="flex gap-1">Logout</span>
                </button>
              )}

              <h1 className="text-white">{userdata?.displayName}</h1>
              <h1 className="text-white">{users?.name}</h1>

              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={profile}
                alt="Bordered avatar"
              />
            </div>
          </div>
        </div>
      </div>

      {isMobilemenu && (
        <div id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </a>
            <a
              href="/properties"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Properties
            </a>
            <a
              href="/properties/add"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Add Property
            </a>
            <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4">
              <span>Login|Register</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
