import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Navigation from '../Navigation/Navigation'
import './Cart.css';
import Product from '../Product/Product';
import { getItem } from '../../actions/cartActions';

function Dashboard() {
    const state = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItem());
    });

    const products = state.map((product, index) => {
        return (
            <Product key={index} product={product} />
        )
    });

    return (
        <div>
            <Navigation />
            <div className="Cart-Section">
                {products}
            </div>
        </div>
    )
}

export default Dashboard
