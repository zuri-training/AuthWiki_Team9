import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
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
      const response = await customFetch.post("/user/login", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Bad credentials");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      console.log(payload);
      state.user = null;
      removeUserFromLocalStorage();
      toast.success(payload);
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Account created Successfully ");
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      for (const key in payload) {
        if (key === "password") {
          toast.error("Ensure the password has at least 6 characters.");
        } else {
          toast.error(
            payload[key][0].replace(/^./, payload[key][0][0].toUpperCase())
          );
        }
      }
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      addUserToLocalStorage(payload);
      toast.success("Login Successful");
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});
// auth@auth.com

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
