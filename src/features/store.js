import { configureStore } from "@reduxjs/toolkit";
import authslice from "./Auth/AuthSlice"
import propertyslice from "./ProductAdd/ProductSlice"


const store = configureStore({
  reducer: {
    auth : authslice,
    Property : propertyslice,
  },
});

export default store;
