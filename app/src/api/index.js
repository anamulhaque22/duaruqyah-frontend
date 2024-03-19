import axios from "axios";
import { useEffect, useState } from "react";

// Backend || Server ==> URL Address
const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await api.get(endPoint);
        setData(data["data"]);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [endPoint]);

  console.log(data);
  return { data, loading, error };
};

// REST api call

// GET Requests...

export const useGetCategories = () => useFetch("category/en");
export const useGetDuas = (categoryId, subcategoryId) =>
  useFetch(`dua/${categoryId}/en`); //get teacher list
