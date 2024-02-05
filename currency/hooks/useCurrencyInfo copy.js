import { useEffect, useState } from "react";

function useCurrencyInfoCopy(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const result = await response.json();

        if (isMounted) {
          setData(result[currency]);
        }
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchdata();

    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfoCopy;
