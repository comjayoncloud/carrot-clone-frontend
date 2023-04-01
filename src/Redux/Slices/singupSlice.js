import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postAsync = createAsyncThunk(
  "post/postAsync",
  async (postData) => {
    const response = await axios.post("http://localhost:3030/post", postData);
    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postAsync.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.posts.push(action.payload);
      })
      .addCase(postAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postSlice.reducer;
