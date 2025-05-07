import React from "react";
import { Products } from "../Data";
import {useSelector,useDispatch} from 'react-redux'
import {addToCart,selectCartItems} from '../redux/cardSlice/cardSlice'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCartItems)

  const handleAddToCart = (items)=>{
    dispatch(addToCart(items))
    toast.success('Item Added To cart', {
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
  }
  return (
    <div>
      <ToastContainer/>
      <div className="container">
        <div className="row mt-5">
          {Products.map((items) => (
            
            <div key={items.id} className="container col-md-4 my-5">
              <div className="card bg-dark" style={{width:'18rem'}}>
              <div className="p-3 d-flex justify-content-center align-items-center">
                <img src={items.imgSrc} className="card-img-top" style={{width:'200px',
                  height:'200px',
                  borderRadius:'10px'
                }} />
                </div>
                <div className="card-body text-light text-center">
                  <h5 className="card-title">{items.title}</h5>
                  <p className="card-text">
                    {items.description}
                  </p>
                  <button className="btn btn-primary mx-3 ">{items.price}₹</button>
              
                  <button className="btn btn-warning" onClick={()=>handleAddToCart(items)}>Add to cart</button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
