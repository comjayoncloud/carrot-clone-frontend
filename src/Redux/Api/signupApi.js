import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/** 비동기 */
export const signupPost = createAsyncThunk(
  "post/postAsync",
  async (postData) => {
    const response = await axios.post("http://localhost:3030/post", postData);
    return response.data;
  }
);
