import { createSlice } from "@reduxjs/toolkit";
import { filterJobs } from "../Components/FilterSearch/FilterJobs";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        data: [],
        filters: {
            role: "",
            experience: "",
            remote: "",
            minBasePay: "",
            companyName: "",
            location: "",
            techStack: "",
        },
        originalData: [],
        isLoading: false,
    },
    reducers: {
        addDetails: (state, action) => {
            state.data = action.payload;
            state.originalData = action.payload;
        },
        updateFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
            const activeFilters = Object.keys(state.filters).filter(filter => state.filters[filter] !== "");
            state.data = filterJobs(state.originalData, state.filters, activeFilters);
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    }
});

export const { addDetails, updateFilters, setIsLoading } = jobSlice.actions;

export default jobSlice.reducer;