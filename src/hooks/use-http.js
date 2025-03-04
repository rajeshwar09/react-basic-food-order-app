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

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const responseData = await sendHttpRequest(url, {
          ...config,
          body: data,
        });
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
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    error,
    isLoading,
    data,
    sendRequest,
    clearData
  };
}

export default useHttp;
