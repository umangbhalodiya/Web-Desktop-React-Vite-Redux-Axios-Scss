import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";

const initialState = {
  user: null,
};

export const signUp = createAsyncThunk("/auth/signup", async (body) => {
  try {
    const response = await axiosInstance.post(`register`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUpdatedUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUp.pending, (state) => {})
      .addCase(signUp.fulfilled, (state, action) => {
        console.log("Token:", action.payload);
        state.user = action.payload.data;
      })
      .addCase(signUp.rejected, (state, action) => {});
  },
});

export const { setUpdatedUser } = authSlice.actions;
export default authSlice.reducer;
