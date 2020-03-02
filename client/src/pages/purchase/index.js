import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../../components/PaymentForm/index';
import './style.css'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_Pn2QWutVhjdDrcFaKWDoM5DJ00ZLEeus2G");

function Purchase() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
};
export default Purchase;
