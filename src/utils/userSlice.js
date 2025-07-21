import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      const { uid, email, displayName, photoURL } = action.payload;
      return {
        uid: uid,
        email: email,
        displayName: displayName,
        photoURL: photoURL,
      };
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});
export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
