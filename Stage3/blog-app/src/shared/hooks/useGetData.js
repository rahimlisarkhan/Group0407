import { useEffect, useState } from 'react';

export const useGetData = (getCallback) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await getCallback();

      if (response.result) {
        // success logic...
        setData(response.data);
        setLoading(false);

        return;
      }

      // error logic
      setError('Xeta bas verdi');
      setLoading(false);
    }

    getData();
  }, [getCallback]);

  return {
    data,
    error,
    loading,
  };
};
