import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import authHeader from "../../utils/authHeader";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  authlib: [],
};

export const getAllAuthLib = createAsyncThunk(
  "authlib/",
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get(
        "/authlibrary/",
        authHeader(thunkAPI)
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authLibSlice = createSlice({
  name: "authlib",
  initialState,
  extraReducers: {
    [getAllAuthLib.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllAuthLib.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.authlib = payload;
    },
    [getAllAuthLib.rejected]: (state, { payload }) => {
      state.isLoading = false;
      for (const key in payload) {
        toast.error(payload[key]);
      }
    },
  },
});

export default authLibSlice.reducer;
