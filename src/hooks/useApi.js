import { useCallback, useState } from "react";

const API_URL = "https://api.spaceflightnewsapi.net/v3";

const useApi = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async ({ extraUrl = "", ...params }) => {
    let paramsStr = "";
    for (const prop in params) {
      if (params.hasOwnProperty(prop)) {
        paramsStr += `${prop}=${params[prop]}&`;
      }
    }
    if (paramsStr.length !== 0) {
      paramsStr = "?" + paramsStr.slice(0, -1);
    }
    setLoading(true);
    const response = await fetch(`${API_URL}${extraUrl}${paramsStr}`);
    const data = response.json();
    setLoading(false);
    return data;
  }, []);

  return [fetchData, loading];
};

export default useApi;
