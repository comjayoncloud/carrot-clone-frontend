import { createAsyncThunk } from "@reduxjs/toolkit";

import apiClient from "./apiClient";
/** 비동기 */
export const getPostDbdata = createAsyncThunk(
  "secondhand/getPostDbdata",
  async () => {
    const response = await apiClient.get("http://localhost:3030/getpostdb");
    return response.data;
  }
);
