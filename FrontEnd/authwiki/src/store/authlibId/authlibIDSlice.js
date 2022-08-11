import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import authHeader from "../../utils/authHeader";

const initialState = {
  isLoading: true,
  authlib: {},
  notFound: false,
};
// ;
export const getIDAuthLib = createAsyncThunk(
  "authlib/",
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `/authlibrary/${id}`,
        authHeader(thunkAPI)
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const upVote = createAsyncThunk("authlib/", async (id, thunkAPI) => {
  try {
    const response = await customFetch.post(
      `/comment/${id}/create_upvote`,
      {},
      authHeader(thunkAPI)
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const downVote = createAsyncThunk("authlib/", async (id, thunkAPI) => {
  try {
    const response = await customFetch.post(
      `/comment/${id}/create_downvote`,
      {},
      authHeader(thunkAPI)
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const getIDAuthLibSlice = createSlice({
  name: "authlibID",
  initialState,
  extraReducers: {
    [getIDAuthLib.pending]: (state) => {
      state.isLoading = true;
    },
    [getIDAuthLib.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.authlib = payload;
    },
    [getIDAuthLib.rejected]: (state) => {
      state.isLoading = false;
      state.notFound = true;
    },
  },
});

export default getIDAuthLibSlice.reducer;
