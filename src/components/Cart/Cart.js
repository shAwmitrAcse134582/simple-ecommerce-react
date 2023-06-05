import React from 'react';
import "./Cart.css";
import { clear } from '@testing-library/user-event/dist/clear';

const Cart = (props) => {
    const{cart,clearCart,children}=props;
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart) {
        quantity+=product.quantity;
        total+=product.price*product.quantity;
        shipping+=product.shipping;
    }
    let tax=(total*0.1).toFixed(2);
    let grandTotal=total+shipping+parseFloat(tax);
    return (
        <div className='cart'>
            <h2>order Summary</h2>
                <p>selected Item:{quantity}</p>
                <p>Total price:${total} </p>
                <p>Total shipping:${shipping} </p>
                <p>Tax:${tax}</p>
                <h3>Grand Total:${grandTotal.toFixed(2)} </h3>
                <button className='clearCart' onClick={clearCart}>Clear Cart</button>
                
                {children}
        </div>
    );
};

export default Cart;