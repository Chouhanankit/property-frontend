import React, { useEffect, useState } from "react";
import logo from "../assets/Images/loginicon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/Auth/AuthSlice";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlelogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(formData));
  };

  useEffect(() => {
    if (users && isSuccess) {
      navigate("/");
      toast.success(`welcome 🎉 ${users.name}`);
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [isSuccess, isError, message, users]);

  if (isLoading) {
    return (
      <h1 className="loading flex justify-center py-10">
        <PulseLoader
          loading={true}
          color="gray"
          style={{ paddingBlock: "20px" }}
        />
      </h1>
    );
  }

  const loginwithgoogle = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  // for login page change
  const btn = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <span className="w-full items-center mx-14 rounded-lg bg-blue-50">
              <button
                className={
                  location.pathname === "/login"
                    ? "bg-blue-300 p-2 w-1/2 "
                    : "bg-blue-300 p-2 w-1/2 "
                }
              >
                Sign In{" "}
              </button>
              <button onClick={btn} className=" p-2 w-1/2">
                Sign Up
              </button>
            </span>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  onClick={loginwithgoogle}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-blue-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign In with Google</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign In with Cartesian E-mail
                </div>
              </div>

              <form onSubmit={handlelogin} className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handlechange}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handlechange}
                />
                <button className="mt-5 tracking-wide font-semibold bg-blue-400 text-white-500 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2 mx-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-">Sign In</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Cartesian Kinetics
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-blue-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <img src={logo} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
