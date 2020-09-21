import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../Product/Products.css';
import ProductDesc from './ProductDesc';
import Item from './Item';
import { addItem } from '../../actions/cartActions';

function Product(props) {
    const { product } = props;
    const state = useSelector(state => state.cart.addedItems);
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState('');

    const style = {
        fontFamily: "Roboto"
    }

    const addItemToCart = (size) => {
        if(!size) {
            setErrMsg('Please select size.');
        } else {
            setErrMsg('');
            dispatch(addItem(product.id, size))
        }
    }

    return (
        <>
        <Item src={product.src} />
        <ProductDesc item={product} addToCart={addItemToCart} errMsg={errMsg} />
        </>
    )
}

export default Product
