import { createAsyncThunk } from "@reduxjs/toolkit";
import testApi from "@/services/api/test";

export const getTest = createAsyncThunk(
  "test/getTestApi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await testApi.getTestApi(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
