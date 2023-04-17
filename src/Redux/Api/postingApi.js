import { createAsyncThunk } from "@reduxjs/toolkit";

import apiClient from "./apiClient";
/** 비동기 */
export const postingPost = createAsyncThunk(
  "login/postingPost",
  async (postData) => {
    const response = await apiClient.post(
      "http://localhost:3030/posting",
      postData
    );

    return response.status;
  }
);
