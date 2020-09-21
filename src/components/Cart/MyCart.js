import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function MyCart(props) {
    const { items, toggle } = props;

    let myCartStyle;
    if(toggle) {
        myCartStyle = {
            display: "block",
            margin: "0px 50px",
            border: "1px solid black",
            position: "absolute",
            right: 0,
            backgroundColor: "white"
        }
    } else {
        myCartStyle = {
            display: "none"
        }
    }

 
    const groupBy = (items, key) => items.reduce(
        (result, item) => ({
          ...result,
          [item[key]]: [
            ...(result[item[key]] || []),
            item,
          ],
        }), 
        {},
    );

    const addedItems = groupBy(items, 'size');
    
    const displayItems = Object.keys(addedItems).map((displayItem, i, value) => {
        const itemLength = addedItems[displayItem].length;
        const itemSize = addedItems[displayItem][0].size;
        const itemPrice = addedItems[displayItem][0].price;
        const itemName = addedItems[displayItem][0].productName;
        return (
            [<li key={i}>
                {itemName}
            <p>{itemLength} x ${itemPrice.toFixed(2)}</p>
            <p>Size: {itemSize}</p>
            </li>]
        )
    })
    
    return (
        <div className="MyCart" style={myCartStyle}>
             <ul>
                {displayItems}
             </ul>
        </div>
    )
}

export default MyCart
