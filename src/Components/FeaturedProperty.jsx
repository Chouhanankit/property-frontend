import React from "react";
import propertyimg from "../assets/Images/Building.jpg";
import {
  FaBath,
  FaBed,
  FaMapMarker,
  FaMoneyBill,
  FaRulerCombined,
} from "react-icons/fa";

const FeaturedProperty = () => {
  const property = {
    rates: {
      nightly: "400",
      monthly: "300",
      weekly: "200",
    },
    type: "Apartment",
    img: "",
    name: "Shyam Villa ",
    beds: "2",
    bath: "1",
    square_feet: "4000",
    location: {
      city: "indore",
      state: "Mp",
    },
  };

  const getPricing = () => {
    if (property.rates.nightly) {
      return property.rates.nightly + "/night";
    } else if (property.rates.weekly) {
      return property.rates.weekly + "/week";
    } else if (property.rates.monthly) {
      return property.rates.monthly + "/month";
    }
  };

  return (
    <section className="w-full h-auto bg-blue-50">
      <h1 className=" text-2xl font-semibold text-blue-500 py-4 flex items-center justify-center sm:text-5xl md:text-4xl">
        Featured Property
      </h1>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-8"
        >
          <div className="">
            <img src={propertyimg} className="w-96 md:w-auto h-44 rounded-t-md md:rounded-t-none md:rounded-l-md" alt="img" />
          </div>
          <div className="flex flex-col justify-between px-4 leading-normal pt-4">
            <div className="px-4">
              <div className="text-left md:text-center lg:text-left mb-2">
                <div className="text-gray-600">{property.type}</div>
                <h3 className="text-xl font-bold">{property.name}</h3>
              </div>
              <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                ${getPricing()}
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p className="flex items-center gap-2">
                  <FaBed /> {property.beds}
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaBath /> {property.bath}
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaRulerCombined />
                  {property.square_feet}{" "}
                  <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                <p className="flex items-center gap-2">
                  {property.rates.weekly}
                  <FaMoneyBill /> Weekly
                </p>
                {property.rates.monthly ? (
                  <p className="flex items-center gap-2">
                    {property.rates.monthly} <FaMoneyBill /> Monthly
                  </p>
                ) : (
                  <p className="flex items-center gap-2">
                    {property.rates.nightly} <FaMoneyBill /> Nightly
                  </p>
                )}
              </div>

              <div className="border border-gray-100"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <FaMapMarker className="text-orange-700 mt-1" />
                  <span className="text-orange-700">
                    {property.location.city} {property.location.state}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-8"
        >
          <div className="">
            <img src={propertyimg} className="w-96 md:w-auto h-44 rounded-t-md md:rounded-t-none md:rounded-l-md" alt="img" />
          </div>
          <div className="flex flex-col justify-between px-4 leading-normal pt-4">
            <div className="px-4">
              <div className="text-left md:text-center lg:text-left mb-2">
                <div className="text-gray-600">{property.type}</div>
                <h3 className="text-xl font-bold">{property.name}</h3>
              </div>
              <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                ${getPricing()}
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p className="flex items-center gap-2">
                  <FaBed /> {property.beds}
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaBath /> {property.bath}
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaRulerCombined />
                  {property.square_feet}{" "}
                  <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                <p className="flex items-center gap-2">
                  {property.rates.weekly}
                  <FaMoneyBill /> Weekly
                </p>
                {property.rates.monthly ? (
                  <p className="flex items-center gap-2">
                    {property.rates.monthly} <FaMoneyBill /> Monthly
                  </p>
                ) : (
                  <p className="flex items-center gap-2">
                    {property.rates.nightly} <FaMoneyBill /> Nightly
                  </p>
                )}
              </div>

              <div className="border border-gray-100"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <FaMapMarker className="text-orange-700 mt-1" />
                  <span className="text-orange-700">
                    {property.location.city} {property.location.state}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProperty;
