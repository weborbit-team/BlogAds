import { configureStore } from "@reduxjs/toolkit";
import testSlice from '@/redux/reducers/testSlice'

const reducers = {
  test: testSlice,
};

export default configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: reducers,
});