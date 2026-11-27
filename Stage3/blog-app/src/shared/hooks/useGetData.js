import { useEffect, useState } from 'react';

export const useGetData = (getCallback, options) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await getCallback();

      if (response.result) {
        // success logic...
        options?.onSuccess?.(response.data);
        setData(response.data);
        setLoading(false);

        return;
      }

      // error logic
      setError('Xeta bas verdi');
      setLoading(false);
    }

    getData();
  }, []);

  return {
    data,
    error,
    loading,
  };
};
