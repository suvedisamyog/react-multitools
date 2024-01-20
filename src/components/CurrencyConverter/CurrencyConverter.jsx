import React, { useCallback, useEffect, useState } from 'react'
import {useCurrency,CurrencyCard} from '../../ImportExport'
const CurrencyConverter = () => {
  
  const [amount,setAmount]=useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("npr")
  const [convertedAmount,setConvertedAmount]=useState()
  const CurrencyInfo=useCurrency(from)
  const options=Object.keys(CurrencyInfo)

  const convert=()=>{
    setConvertedAmount(amount * CurrencyInfo[to])
  }
  const swap=()=>{
    setFrom(to)
    setTo(from)
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
  }
  const onloadCurrency=useCallback(()=>{
    
    convert()
  },[amount,from,to,options])
  useEffect(()=>{
    
    onloadCurrency()
  },[onloadCurrency])
  
    return (
    <>
            <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
        style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg')`,
        }}>
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                    <CurrencyCard 
                    label="From"
                    selectCurrency={from}
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency)=>setFrom(currency)}
                    onAmountChange={(amount)=>setAmount(amount)}
                    isDisable={false}
                    


                    />

                    </div>
                    <div className="relative w-full h-0.5 mt-8 mb-8 " >
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2  bg-blue-500 rounded-md bg-blue-600  px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                    <CurrencyCard 
                    label="To"
                    selectCurrency={to}
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency)=>setTo(currency)}
                    isDisable={true}

                    

                     />
 
                    </div>
                    <button type="submit" className="w-full px-4 py-3 "
                   >
                        Convert {from.toUpperCase()} To {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
     
    </div>
   
    </>
  )
}

export default CurrencyConverter