import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";
/** 비동기 */
export const searchGet = createAsyncThunk(
  "secondhand/searching",
  async (query) => {
    console.log(query);
    const response = await apiClient.get("http://localhost:3030/searching", {
      params: { keyword: query },
    });
    return {
      data: response.data,
      status: response.status,
    };
  }
);
