import React from 'react';
import './style.css'

function OrderTotal(props) {
    console.log('PROPS in order total!!!!', props)
    return (
        <>
            <div className="totalWrapper">
                <div className="subtotal">Subtotal: $</div>
                <div className="estShipping">Estimated Shipping: $</div>
                <div className="salesTax">Sales Tax: $</div>
                <div className="ordertotal">Total: $</div>
                <button onClick={() => { props.setPurchase(true) }}>Place Your Order</button>
            </div>
        </>
    )
}

export default OrderTotal;
