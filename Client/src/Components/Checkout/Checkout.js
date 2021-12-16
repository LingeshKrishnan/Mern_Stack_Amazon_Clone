import React from 'react';
import Cartproducts from '../Cartproducts/Cartproducts';
import { useStateValue } from '../StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css'

function Checkout() {
    const[{cart}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__Left">   
                        
                <img className="checkout__Ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt =""
                />
           
                <div className="checkout__Cart">
                    <h2 className="checkout__Title">Cart Details info</h2>
                    {cart.map(item => (
                        <Cartproducts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    )
                    )}
                </div>                
            </div>
            <div className="checkout__Right">
                Price Details for Cart
                <Subtotal />
            </div>            
        </div>
    )
}

export default Checkout
