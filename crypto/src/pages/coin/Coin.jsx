import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinsContext } from "../../content/CoinContext";
import LineChart from "../../component/LineChart/lineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setcoinData] = useState();
  const [hishtoricalData, setHishtoricalData] = useState();
  const { currency } = useContext(CoinsContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-3MsBZNoUGCw8MHLvAqgBWqtj",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setcoinData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  const fetchHishtoricalData = async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-3MsBZNoUGCw8MHLvAqgBWqtj'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHishtoricalData(res))
      .catch(err => console.error(err));

  }
  useEffect(() => {
   fetchCoinData();
   fetchHishtoricalData()
  }, [currency])
  

  if (coinData,hishtoricalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt="mm" />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coin-chart">
    <LineChart hishtoricalData={hishtoricalData}/>
        </div>

        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Curent Price</li>
            <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocalString()}</li>
          </ul>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="spinner">
       <div className="spin">
       </div>
      </div> 
    )
  }
};

export default Coin;
