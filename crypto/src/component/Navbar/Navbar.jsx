import React, { useContext } from 'react'
import './Navbar.css'
import {CoinsContext} from '../../content/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => { 


  const {setCurrency} = useContext(CoinsContext)

    

  const currencyHandler = (event)=>{

    switch(event.target.value){
      case 'usd' :{
        setCurrency({name:'usd',symbol:"$"})
        break;
      }
      case 'eur' :{
        setCurrency({name:'eur',symbol:"$"})
        break;
      }
      case 'inr' :{
        setCurrency({name:'inr',symbol:"₹"})
        break;
      }
      default :{
        setCurrency({name:'usd',symbol:"$"})
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link>
      <img src="" alt="" />
      </Link>
      <ul>
        <Link to={'/'} style={{textDecoration:'none'}}> <li>Home</li></Link>
       
        <li>Feature</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        
        </select>
        <button><img src='' alt="" />Sign up</button>
      </div>
    </div>
  )
}

export default Navbar