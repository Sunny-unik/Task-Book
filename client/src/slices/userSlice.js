import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;

export const userSlice = createSlice({
  name: "counter",
  initialState: null,
  reducers: {
    addInList: (state) => state.board
  },
  extraReducers: {
    LOGIN_USER: (state, { payload }) => (state = payload)
  }
});

export const { addInList } = userSlice.actions;

export default userSlice.reducer;

export const checkLogin = createAsyncThunk("LOGIN_USER", async (credentials, { dispatch }) => {
  axios
    .post(`http://localhost:4000/user/login`, credentials)
    .then((res) => {
      if (!res.data.data) alert(res.data.message);
      else alert("user login successfull");
      dispatch({ type: "LOGIN_USER", payload: res.data.data });
    })
    .catch((err) => console.log(err));
});
