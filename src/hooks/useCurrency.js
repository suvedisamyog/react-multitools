import { useCallback, useEffect, useState } from "react";

function useCurrency(currency){
const [data,setData]=useState({})
const getCurrency=useCallback(()=>{
    fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
},[currency])
useEffect(()=>{
    getCurrency()
},[currency,getCurrency])
return data
}
export default useCurrency;