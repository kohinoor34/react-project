import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {clearCart,selectCartItems} from '../redux/cardSlice/cardSlice'
import {Link } from 'react-router-dom'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCartItems)

  return (
 <>
   <ToastContainer/>
 <div className="container text-center my-5" style={{width:'700px'}}>
  {cart.length == 0 && (
    <>
    <h1>Your cart is empty..</h1>
    <Link to={'/'} className='btn btn-warning'>Continue Shopping...</Link>
    </>
  )
  }
  
  {
   cart.map((item)=>(
    <div key={item.id} className='container my-5'>
   <div className="card mb-3 bg-dark text-light text-center" style={{maxWidth:'650px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <div className='p-3'>
      <img src={item.imgSrc} className="img-fluid rounded-start" alt="..." style={{borderRadius:'10px '}}/>
      </div>
    </div>  
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <button className='btn btn-primary mx-3'>{item.price}{' '}₹</button>
        <button className='btn btn-warning'>Buy now</button>
      </div>
    </div>
  </div>
</div>

    </div>
   ))
  }
{
  cart.length !=0 &&(
    <>
    <button onClick={()=>{dispatch(clearCart())
      toast.success(' Cart Cleared', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }} className="btn btn-danger">Clear cart</button>
    </>
  )
}
   
 </div>
 </>

  )
}

export default Cart