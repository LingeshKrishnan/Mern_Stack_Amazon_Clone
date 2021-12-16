import React from 'react'
import { useStateValue } from '../StateProvider';
import './Products.css';
import { useSelector } from 'react-redux'
function Products({id, title, rating, price, image}) {

    const products = useSelector((state) => state.login);
    console.log("products",products);

    const [{ cart }, dispatch] = useStateValue();
    console.log(cart);
    const addToCart = () => {
        dispatch ({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };

    return (
        <div className="products">
            <div className="products__Info">
                <p>{title}</p>
                <p className="products__Price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div class="products__Rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))
                    }
                    
                </div>
            </div>
            
            <img className="products__Image"
            src={image}
            alt=""
            />
            <button onClick={addToCart} className="products__Button">
                Add to Cart
            </button>
        </div>
    )
}

export default Products
