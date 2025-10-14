import { createSlice } from "@reduxjs/toolkit";
import { getTest } from "../actions/testAction";

const testSlice = createSlice({
    name: "test",
    initialState: {
        loading: false,
        error: null,
        data: null,
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTest.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        });
        builder.addCase(getTest.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.success = true;
        });
        builder.addCase(getTest.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });
    }
})
export default testSlice.reducer;