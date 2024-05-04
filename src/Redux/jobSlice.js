import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        data: []
    },

    reducers: {
        addDetails: (state, action) => {
            state.data = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
          },
    }
});

export const { addDetails , setIsLoading } = jobSlice.actions;

export default jobSlice.reducer;