import React from 'react';
import './Subtotal.css';
import * as CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

function Subtotal() {
    const [{cart}] = useStateValue();
    console.log(cart);
    let sum = cart.reduce(function(prev, current) {
        return prev + +current.price
      }, 0);
    //console.log(sum);
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal ({cart?.length} items) : <strong>{ value }</strong>
                        </p>
                        <small className="subtotal__Offer">
                            <input type="checkbox" />This Containes an Offer
                        </small>
                    </>
                )}
                decimalScale={2}
                value={sum}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className="subtotal__Button">Proceed to Pay</button>
        </div>
    )
}

export default Subtotal
