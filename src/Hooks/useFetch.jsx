import { useState } from 'react';
import axios from 'axios';
const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (method, url, data) => {
    setLoading(true);

    try {
      const response = await axios({ method, url, data });

      setResponse(response);
      return response;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useFetch;
