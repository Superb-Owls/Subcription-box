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

function Purchase(props) {
console.log('THIS IS THE PROPS !!!!!!!!!!!!!', props);

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
                <OrderSummary comicsArray={props.selectedHero.comicsToBuy} info={state} />
            </div>
            <div className="total">
                <PaymentTitle />
                <OrderTotal comicsArray={props.selectedHero.comicsToBuy} purchase={purchase} setPurchase={setPurchase} />
            </div>
            <div className="footerwrapper">
                <div className="footlogo">
                    <img src="https://i.imgur.com/SyJcxQk.png" height="200" width="200"></img>
                </div>
                <div className="footlinks2">
                    <a href="/LoginOrSignUp">LOGIN</a>
                    <br />
                    <a href="/Tiers">SUBSCRIPTIONS</a>
                    <br />
                    <a href="/About">ABOUT</a>
                    <br />
                    <a href="/PrivacyPolicy">PRIVACY POLICY</a>
                    <br />
                    <a href="https://github.com/Superb-Owls/Subscription-box">GITHUB</a>
                    <br />
                    <a href="/Sitemap">SITEMAP</a>
                    <br />
                    <br />
                    © HEROBOX 2020
                    </div>
                <div className="footlinks1">
                    THIS IS A STUDENT PROJECT, NOT AN ACTUAL E-COMMERCE SITE.
                        <br />
                    <br />
                    PLEASE DO NOT ENTER IN YOUR CREDIT CARD INFORMATION.
                        <br />
                    <br />
                    NO ACTUAL SERVICE WILL BE PROVIDED.
                    </div>
            </div>

        </div>

    );
};
export default Purchase;
