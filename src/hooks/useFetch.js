import { useState, useEffect } from "react";
import axios from "axios";
import endPoints from "@services/api";

const useFetch = (endPoints) => {
        const [data, setData] = useState([]);

        async function fetchData() {
            const response = await axios.get(endPoints);
            setData(response.data);
        }

        useEffect(() => {

            try {
                fetchData();
            } catch (error) {
                console.log(error);
            }
        }, []);

        return data;
};

export default useFetch;