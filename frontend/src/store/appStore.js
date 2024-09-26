import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authentication/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
