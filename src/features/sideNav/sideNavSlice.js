import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideNav: false,
};

export const sideNavSlice = createSlice({
  name: "sideNav",
  initialState: initialState,
  reducers: {
    openMenu(state) {
      state.sideNav = true;
      const offcanvasBackground = document.getElementById(
        "offcanvas-background"
      );
      offcanvasBackground.classList.add("offcanvas-background");
    },
    closeMenu(state) {
      state.sideNav = false;
      const offcanvasBackground = document.getElementById(
        "offcanvas-background"
      );
      offcanvasBackground.classList.remove("offcanvas-background");
    },
  },
});

export const { openMenu, closeMenu } = sideNavSlice.actions;
export default sideNavSlice.reducer;
