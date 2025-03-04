import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong!");
  }

  return responseData;
}

function useHttp(url, config, initialData) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const sendRequest = useCallback(
    async function sendRequest(url, config) {
      setIsLoading(true);
      try {
        const responseData = await sendHttpRequest(url, config);
        setData(responseData);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest(url, config);
    }
  }, [sendRequest, config]);

  return {
    error,
    isLoading,
    data,
    sendRequest,
  };
}

export default useHttp;
