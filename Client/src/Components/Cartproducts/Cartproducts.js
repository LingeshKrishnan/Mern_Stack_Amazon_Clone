import React from 'react';
import { useStateValue } from '../StateProvider';
import './Cartproducts.css'

function Cartproducts({ id, image, title, price, rating }) {
    const [{cart} ,dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        });
    };
    return (
        <div className="cartProduct">
            <img className="cartProduct__Image"
            src = {image}
            alt=""
            />
            <div className="cartProduct__Info">
                <p className="cartProduct__Title">
                    {title}
                </p>
                <p className="cartProduct__Price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="cartProduct__Rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>⭐</p>
                    ))
                    }
                </div>
                <button onClick={removeFromCart}>Remove Item</button>
            </div>
        </div>
    )
}

export default Cartproducts
