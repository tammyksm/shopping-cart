import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css';
import MyCart from '../Cart/MyCart';
import { getAddedItems } from '../../actions/cartActions';

function Navigation() {
    const [showMyCart, setShowMyCart] = useState(false);
    const state = useSelector(state => state.cart.addedItems);
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [state])
    const cartStyle = {
        margin: "0 20px",
        color: "#888888"
    }

    const myCart = () => {
        dispatch(getAddedItems())
        setShowMyCart(prevState => !prevState)
        
    }

    return (
       <>
        <div className="clearfix Navigation">
            <div className="float-right">
                <span onClick={myCart} id="cart" style={cartStyle}><span id="cart-icon"></span> ({state.length})</span>
            </div>
        </div>
        
        <div className="Cart-Items float-right">
            <MyCart items={state} toggle={showMyCart}/>
        </div>
       </>
    )
}

export default Navigation
