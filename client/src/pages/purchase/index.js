import React, { useState } from 'react';
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

    const [state, setState] = useState({
        shipping: {
            firstname: '',
            lastname: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        },
        billing: {
            firstname: '',
            lastname: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        }
    })

    const [purchase, setPurchase] = useState(false)

    const handleTyping = (e, formType) => {
        console.log('u r typing!!', e.target.value, e.target.name, formType)
        // setState({ ...state, state[formType][e.target.name]: e.target.value })

        let newState = state[formType]
        newState[e.target.name] = e.target.value

        setState({
            ...state, [formType]: newState
        })
    }


    console.log('this is our state!!!', state);

    return (
        <div className="paymentWrapper">
            <div className="shipping">
                <PaymentTitle name={data[0].title} />
                <Address formType={'shipping'} handleTyping={handleTyping} />
            </div>
            <div className="billing">
                <PaymentTitle name={data[1].title} />
                <Address formType={'billing'} handleTyping={handleTyping} />
            </div>
            <div className="cc">
                <PaymentTitle name={data[2].title} />
                <Elements stripe={stripePromise}>
                    <PaymentForm purchase={purchase} />
                </Elements>
            </div>
            <div className="order">
                <PaymentTitle name={data[3].title} />
                <OrderSummary info={state} />
            </div>
            <div className="total">
                <PaymentTitle />
                <OrderTotal purchase={purchase} setPurchase={setPurchase} />
            </div>


        </div>

    );
};
export default Purchase;
