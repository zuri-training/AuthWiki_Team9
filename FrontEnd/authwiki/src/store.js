import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
