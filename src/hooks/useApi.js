import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default function useApi(URL, defaultData = []) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      let res = await axios.get(URL);
      setData(res.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError("There is some error while fetching data!");
    }
  }, [URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    error,
    data,
    isLoading
  };
}
