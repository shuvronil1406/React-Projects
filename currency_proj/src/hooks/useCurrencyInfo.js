import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); 
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) //res means the response from the fetch api. we are converting the response into json format as it is in string  in the api.
      .then((res) => setData(res[currency])); //every res has a key which is the currency, so we need to acces the values of that very key, it can be inr, usd and so on.
  }, [currency]); //the hook or the api will be called everytime the currency changes so currency is a dependency for the useEffect hook.
  console.log(data)
  return data;
}
export default useCurrencyInfo;

