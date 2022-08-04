import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store/user/userSlice";
import authlibSlice from "./store/authlib/authlibSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    authlib: authlibSlice,
  },
});
