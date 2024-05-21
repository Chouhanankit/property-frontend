import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authservice from "./AuthService";

const usersExist = JSON.parse(localStorage.getItem("users"));
const initialState = {
  users: usersExist ? usersExist : null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(usersRegister.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.users = null;
        state.isError = false;
      })
      .addCase(usersRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
        state.isError = false;
      })
      .addCase(usersRegister.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.users = null;
        state.message = action.payload;
      })
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.users = null;
        state.isError = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
        state.isError = false;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.users = null;
        state.message = action.payload;
      });
  },
});
export default AuthSlice.reducer;

export const usersRegister = createAsyncThunk(
  "REGISTER",
  async (formData, thunkAPI) => {
    try {
      return await authservice.register(formData);
    } catch (error) {
      const message = error || error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const userLogin = createAsyncThunk(
  "LOGIN",
  async (formData, thunkAPI) => {
    try {
      return await authservice.login(formData);
    } catch (error) {
      const message = error || error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const usersLogOut = createAsyncThunk("LOGOUT", async () => {
  return localStorage.removeItem("users") ;
});
