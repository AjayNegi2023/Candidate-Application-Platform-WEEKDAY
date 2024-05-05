import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDetails } from "../Redux/jobSlice";

const useWeekdayData = () => {
    const dispatch = useDispatch();


    const getJobDetails = async() => {
        const URL = "https://api.weekday.technology/adhoc/getSampleJdJSON";
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    limit: 100,
                    offset: 0
                })
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();

            dispatch(addDetails(data.jdList))


        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getJobDetails();
    }, []);
};

export default useWeekdayData;