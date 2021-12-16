import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import '../Product/Product.css'
// import { useStateValue } from '../../StateProvider';
// import cart from ''
// const [{ cart }, dispatch] = useStateValue();

const Product = ({ product }) => {
    // const addToCart = () => {
    //     dispatch ({
    //         type: 'ADD_TO_CART',
    //         item: {
    //             id: id,
    //             title: title,
    //             image: image,
    //             price: price,
    //             rating: rating
    //         },
    //     });
    // };

    return (
        <div className="products">
        <div className="products__Info">
            <p>{product.title}</p>
            <p className="products__Price">
                <small>$</small>
                <strong>{product.price}</strong>
            </p>
            <div class="products__Rating">
                {
                    Array(product.rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))
                }
                
            </div>
        </div>
        
        <img className="products__Image"
        src={product.image}
        alt=""
        />
        {/* <button onClick={addToCart} className="products__Button">
            Add to Cart
        </button> */}
    </div>
       
    );
}


export default Product
