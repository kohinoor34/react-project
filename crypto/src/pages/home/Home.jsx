import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinsContext } from '../../content/CoinContext'
import {Link} from 'react-router-dom'


const Home = () => {
        const{ allCoin,currency} =  useContext(CoinsContext)
      
        
      const [displayCoin, setdisplayCoin] = useState([])
      const [input, setInput] = useState('')

      const inputhandler = (event)=>{
        setInput(event.target.value)
        if(event.target.value ===""){
          setdisplayCoin(allCoin)
        }
      }

      const searchHandler = async(event)=>{
      event.preventDefault()
      const coin = await allCoin.filter((item)=>{
        return item.name.toLowerCase().includes(input.toLowerCase())
      })
      setdisplayCoin(coin)
      }

useEffect(() => {
  setdisplayCoin(allCoin)

}, [allCoin])



  return (
    <div className="home">
        <div className="hero">
            <h1>Largest <br/>Crypto Marketplace</h1>
            <p>Welcome to the world's largest cryptocurency marketplace.Sign up to explore more about cryptos.</p>
            <form onSubmit={searchHandler}>

           <input onChange={inputhandler} list='coinlist' value={input} type='text' placeholder='Search crypto..' required/>

          <datalist id ="coinlist">
            {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
          </datalist>
           <button type='submit'>search</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:'center'}}>24H Change</p>
                <p className='market-cap'>Market Cap</p>
            </div>
            {
              displayCoin.slice(0,10).map((item,index)=>(
                <Link to={`/coin/${item.id}`} style={{textDecoration:'none'}} className='table-layout ' key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + "-" + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0 ? 'green' : 'red'}>{Math.floor(item.price_change_percentage_24h*100)}</p>
              <p className='market-cap'> {currency.symbol}{item.market_cap.toLocaleString()}</p>
                </Link>
              ))
            }
        </div>
    </div>
  )
}

export default Home