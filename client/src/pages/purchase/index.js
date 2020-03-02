import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../../components/PaymentForm/index';
import Address from '../../components/Address'
import PaymentTitle from '../../components/PaymentTitle'
import data from './titlenames.json'
import './style.css'
import './layout.css'
import OrderSummary from '../../components/OrderSummary';
import OrderTotal from '../../components/OrderTotal'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_Pn2QWutVhjdDrcFaKWDoM5DJ00ZLEeus2G");

function Purchase() {
    return (
        <div className="paymentWrapper">
            <div className="shipping">
                <PaymentTitle name={data[0].title} />
                <Address />
            </div>
            <div className="billing">
                <PaymentTitle name={data[1].title} />
                <Address />
            </div>
            <div className="cc">
                <PaymentTitle name={data[2].title} />
                <Elements stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            </div>
            <div className="order">
                <PaymentTitle name={data[3].title} />
                <OrderSummary />
            </div>
            <div className="total">
                <PaymentTitle />
                <OrderTotal />
            </div>


        </div>

    );
};
export default Purchase;
