import React, { useState, useRef }from 'react'
import { Button } from 'reactstrap';

import '../Product/Products.css';

function SizeSelection(props) {
    const [size, setSize] = useState('');
    const { data, addToCart } = props;

    const requiredStyle = {
        color: "#C90000"
    }

    const sizeStyle = {
        fontWeight: "600"
    }

    const buttonSizes = data.sizes.map((buttonSize, index) => {
        return (
            <button onClick={() => selectSize(buttonSize)} key={index} className="sizeBtn">
                {buttonSize}
            </button>
        )
    })

    const selectSize = (itemSize) => {
        setSize(itemSize);
    }

    const addItemToCart = () => {
        addToCart(size);
        setSize('');
    }

    return (
        <div>
            
        <p style={sizeStyle}>SIZE<span className="required" style={requiredStyle}>*</span> <span id="sizeSelected" >{size}</span></p>
            <div className="Size-Selection">
                {buttonSizes}
            </div>
            <br/>
            <button onClick={() => addItemToCart()} className="addToCartBtn">ADD TO CART</button>
        </div>
    )
}

export default SizeSelection
