import React from 'react';
import './layout.css'
import './style.css'

function OrderSummary() {
    return (
        <>
            <div className="summaryWrapper">
                <div className="sumShip">
                    Shipping:
                </div>
                <div className="sumBill">
                    Billing:
                </div>
                <div className="sumCc">
                    Credit Card:
                </div>
                <div className="sumHero">
                    Heroes Purchased:
                </div>
            </div>
        </>
    )
}
export default OrderSummary;