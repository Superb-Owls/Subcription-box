import React from 'react';
import './layout.css'
import './style.css'

function OrderSummary(props) {
    return (
        <>
            <div className="summaryWrapper">
                <div className="sumShip">
                    Shipping:
                    <div>
                        {props.info.shipping.firstname + " " + props.info.shipping.lastname}
                    </div>
                    <div>
                        {props.info.shipping.address1 + " " + props.info.shipping.address2}
                    </div>
                    <div>
                        {props.info.shipping.city + ", " + props.info.shipping.state + " " + props.info.shipping.zip}
                    </div>
                </div>
                <div className="sumBill">
                    Billing:
                    <div>
                        {props.info.billing.firstname + " " + props.info.billing.lastname}
                    </div>
                    <div>
                        {props.info.billing.address1 + " " + props.info.billing.address2}
                    </div>
                    <div>
                        {props.info.billing.city + ", " + props.info.billing.state + " " + props.info.billing.zip}
                    </div>
                </div>
                <div className="sumHero">
                    Heroes Purchased:
                </div>
            </div>
        </>
    )
}
export default OrderSummary;