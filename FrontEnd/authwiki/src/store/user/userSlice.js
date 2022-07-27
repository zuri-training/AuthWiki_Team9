import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";
const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      console.log(user);
      const response = await customFetch.post("/user/register", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      console.log(user);
      const response = await customFetch.post("/user/login", user);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Bad credentials");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state) => {
      state.isLoading = true;
      toast.success("Account created Successfully ");
    },
    [registerUser.rejected]: (state, { payload }) => {
      toast.error("Your info are invalid");
      toast.error("Your email must be unique");
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state) => {
      toast.success("Login Successfully");
    },
    [loginUser.rejected]: (state, { payload }) => {
      toast.error(payload);
    },
  },
});
// auth@auth.com

export default userSlice.reducer;
