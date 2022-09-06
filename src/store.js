import { configureStore } from "@reduxjs/toolkit";
import jsonReducer from "./jsonApiSlice";
export const store = configureStore({
  reducer: {
    jsonReducerWithCount: jsonReducer
  },
  devTools: true
});
