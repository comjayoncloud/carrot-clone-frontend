import { createSlice } from "@reduxjs/toolkit";
import { postingPost } from "../Api/postingApi";

/** (Api-postingApi)의 postingPost함수 추적하기 위함  */
const postingSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postingPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postingPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.push(action.payload);
      })
      .addCase(postingPost.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { actions, reducer } = postingSlice;
