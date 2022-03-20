import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'

const SingleProduct =(props) => {
   
    const{title, image}=props.product
    const {cartIncrease} =props
    console.log(props)
    return (
        <div className='col-md-4'>
            <div className="card p-2 border">
            <h1>Title:{title.slice(0,10)}</h1>
             <img className='w-50 m-auto' src={image} alt="" />   

            <div className="d-flex justify-content-around">
            <button onClick={cartIncrease} className='btn btn-success'>Add to cart</button>
            <button className='btn btn-danger'>delete</button>
            {/* <button className='btn btn-info' >details</button> */}
            <ReactModal product ={props.product}></ReactModal>
            </div>
            </div>
        </div>
    );
};

export default SingleProduct;