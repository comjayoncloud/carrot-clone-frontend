import { createAsyncThunk } from "@reduxjs/toolkit";

import apiClient from "./apiClient";
/** 비동기 */
export const loginPost = createAsyncThunk(
  "login/loginPost",
  async (postData) => {
    const response = await apiClient.post(
      "http://localhost:3030/login",
      postData
    );

    return response.status;
  }
);
