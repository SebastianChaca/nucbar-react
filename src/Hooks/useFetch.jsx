import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const fetchData = async (method, url, data, action) => {
    setLoading(true);
    try {
      const response = await axios({ method, url, data }).then(r => {
        dispatch(action(r.data));
      });
      setResponse(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useFetch;
