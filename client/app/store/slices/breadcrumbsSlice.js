import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breadcrumbs: [],
};

const breadCrumbSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    setBreadcrumb: (state, action) => {
      state.breadcrumbs = [...action.payload];
    },
  },
});

export const { setBreadcrumb } = breadCrumbSlice.actions;
export default breadCrumbSlice.reducer;
