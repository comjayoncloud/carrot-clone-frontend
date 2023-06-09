import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import apiClient from "./apiClient";
/** 비동기 */
export const postingPost = createAsyncThunk(
  "login/postingPost",
  async (postData) => {
    const token = Cookies.get("token");
    const response = await apiClient.post(
      "http://localhost:3030/posting",
      postData,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.status;
  }
);
