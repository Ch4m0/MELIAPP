import { configureStore } from "@reduxjs/toolkit";
import breadcrumbsReduce from "./slices/breadcrumbsSlice";

export const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbsReduce,
  },
});
