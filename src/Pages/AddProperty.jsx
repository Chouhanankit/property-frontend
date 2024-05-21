import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addproperty } from "../features/ProductAdd/ProductSlice";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    propertyType: "",
    listingName: "",
    description: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    beds: "",
    baths: "",
    squareFeet: "",
    sellerName: "",
    sellerEmail: "",
    sellerPhone: "",
    weekly: "",
    monthly: "",
    nightly: "",
    images: [],
    amenities: [],
  });

  const {
    propertyType,
    listingName,
    description,
    street,
    city,
    state,
    zipcode,
    beds,
    baths,
    squareFeet,
    sellerName,
    sellerEmail,
    sellerPhone,
    weekly,
    monthly,
    nightly,
    images,
    amenities,
  } = formData;

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "amenities") {
      const updatedAmenities = checked
        ? [...amenities, value]
        : amenities.filter((amenity) => amenity !== value);

      setFormData({
        ...formData,
        amenities: updatedAmenities,
      });
    } else if (name === "images" && e.target.type === "file") {
      const selectedFiles = Array.from(files);
      setFormData({
        ...formData,
        images: selectedFiles,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Addproperty(formData));
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded p-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Add Property</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="propertyType"
              className="block text-gray-700 font-bold mb-2"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={propertyType}
              onChange={handleChange}
            >
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="condo">Condo</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="listingName"
              className="block text-gray-700 font-bold mb-2"
            >
              Listing Name
            </label>
            <input
              type="text"
              id="listingName"
              name="listingName"
              placeholder="eg. Beautiful Apartment In Miami"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={listingName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              placeholder="Add an optional description of your property"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4 bg-blue-100 p-2">
            <label className="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="Street"
              className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              name="street"
              value={street}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              name="city"
              value={city}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="State"
              className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              name="state"
              value={state}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              name="zipcode"
              value={zipcode}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="beds"
                className="block text-gray-700 font-bold mb-2"
              >
                Beds
              </label>
              <input
                type="number"
                id="beds"
                name="beds"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                value={beds}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="baths"
                className="block text-gray-700 font-bold mb-2"
              >
                Baths
              </label>
              <input
                type="number"
                id="baths"
                name="baths"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                value={baths}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="squareFeet"
                className="block text-gray-700 font-bold mb-2"
              >
                Square Feet
              </label>
              <input
                type="number"
                id="squareFeet"
                name="squareFeet"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                value={squareFeet}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Amenities section */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Amenities
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                "Wifi",
                "Free Parking",
                "24/7 Security",
                "Dishwasher",
                "Balcony",
                "Hot Tub",
                "Air Condition",
                "Coffee Maker",
                "Elevator Access",
              ].map((amenity) => (
                <label key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="amenities"
                    value={amenity}
                    checked={amenities.includes(amenity)}
                    onChange={handleChange}
                  />
                  <span className="ml-2">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 bg-blue-100 p-2">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Rates (Leave blank if not applicable)
              </label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Weekly"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-2"
                  name="weekly"
                  value={weekly}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Monthly"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-2"
                  name="monthly"
                  value={monthly}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Nightly"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-2"
                  name="nightly"
                  value={nightly}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={sellerName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerEmail"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              placeholder="Email address"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={sellerEmail}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerPhone"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Phone
            </label>
            <input
              type="tel"
              id="sellerPhone"
              name="sellerPhone"
              placeholder="Phone"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={sellerPhone}
              onChange={handleChange}
            />
          </div>
          {/* Images section */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Images (Select up to 4 images)
            </label>
            <input
              type="file"
              multiple
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              name="images"
              value={images}
              onChange={handleChange}
            />
          </div>
          {/*  */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
