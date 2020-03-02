import React from 'react';
import './style.css'

function OrderTotal() {
    return (
        <>
            <div className="totalWrapper">
                <div className="subtotal">Subtotal: $</div>
                <div className="estShipping">Estimated Shipping: $</div>
                <div className="salesTax">Sales Tax: $</div>
                <div className="total">Total: $</div>
                <button>Place Your Order</button>
            </div>
        </>
    )
}

export default OrderTotal;
