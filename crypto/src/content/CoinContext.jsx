<>

satuii

</>
import { createContext, useEffect, useState } from "react";

export const CoinsContext = createContext()



const CoinContext = ({children}) => {

    const [allCoin, setAllCoin] = useState([])
    const [currency, setCurrency] = useState({
        name:'usd',
        symbol :'$'
    })



    const fetchAllCoin = async (param) => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-3MsBZNoUGCw8MHLvAqgBWqtj	'
        }
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoin(res))
        .catch(err => console.log(err));  
    }

useEffect(() => {
    fetchAllCoin()

  
}, [currency])

const contextValue = {
    allCoin,currency,setCurrency
}


  return (
    <>
    <CoinsContext.Provider  value={contextValue}>
     {children}
    </CoinsContext.Provider>
    </>
  )
}

export default CoinContext;