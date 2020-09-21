import React, { useState, useEffect } from 'react'
import SizeSelection from '../Product/SizeSelection';
import '../Product/Products.css';

function ProductDesc(props) {
    const { item, addToCart, errMsg } = props;
    const imgStyle = {
        width: "50vh"
    }

    return (
        <div className="Product-Desc">
            <h5>{item.productName}</h5>
            <hr/>
            <b>${item.price.toFixed(2)}</b>
            <hr/>
            <p className="mt-5">
                    {item.productDesc}
            </p>
            {errMsg}
            <SizeSelection data={item} addToCart={addToCart}  />
        </div>
    )
}

export default ProductDesc
