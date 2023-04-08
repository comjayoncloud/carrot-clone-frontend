import { createSlice } from "@reduxjs/toolkit";
import { signupPost } from "../Api/signupApi";

/** (Api-signupApi)의 signupPost함수를 추적하기 위함  */
const signupSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.push(action.payload);
      })
      .addCase(signupPost.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { actions, reducer } = signupSlice;
