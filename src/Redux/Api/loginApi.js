import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/** 비동기 */
export const loginPost = createAsyncThunk(
  "login/loginPost",
  async (postData) => {
    const response = await axios.post("http://localhost:3030/login", postData);
    console.log(response);
    return response.status;
  }
);
