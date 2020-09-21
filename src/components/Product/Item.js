import React from 'react'
import ProductImg from '../../assets/classic-tee.jpg';
import '../Product/Products.css';

function Item(props) {
    const { src } = props;
    const imgStyle = {
        width: "50vh"
    }

    // console.log(props)
    return (
        <div className="Product-Img" >
            <img src={src} style={imgStyle} />
        </div>
    )
}

export default Item
