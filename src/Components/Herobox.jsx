import React, { useEffect, useState } from "react";
import Infobox from "./Infobox";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Herobox = () => {
  const { users, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [userdata, setuserdata] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Infobox
            heading={"For Renters"}
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              Link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </Infobox>

          {!userdata.googleId && !users ? (
            <Infobox
              heading={"For Property Owners"}
              backgroundColor="bg-blue-100"
              buttonInfo={{
                text: "Add Properties",
                Link: "/login",
                backgroundColor: "bg-blue-500",
              }}
            >
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </Infobox>
          ) : (
            <Infobox
              heading={"For Property Owners"}
              backgroundColor="bg-blue-100"
              buttonInfo={{
                text: "Add Properties",
                Link: "/property/add",
                backgroundColor: "bg-blue-500",
              }}
            >
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </Infobox>
          )}
        </div>
      </div>
    </section>
  );
};

export default Herobox;
