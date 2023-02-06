import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};
export const ProfileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      console.log("sukses cek reducer profile");
    },
  },
});

export const { setData } = ProfileReducer.actions;
export default ProfileReducer.reducer;
