import React from 'react';
import './style.css';

function PaymentTitle(props) {
    return (
        <>
            <div className="paymentTitleWrapper">
                {props.name}
            </div>
        </>
    )
}
export default PaymentTitle;