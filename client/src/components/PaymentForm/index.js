import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  CardElement
} from "@stripe/react-stripe-js";

import useResponsiveFontSize from "./UseResponsiveFontSize";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

async function stripeTokenHandler(token) {
  const paymentData = { token: token.id, amount: 1555 };

  // Use fetch to send the token ID and any other payment data to your server.
  //     https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const response = await fetch('/chargestripe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paymentData),
  });
  return response.json();
}

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();


  const handleSubmit = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);

    const card = elements.getElement(CardNumberElement);
    console.log("CARD ", card)
    stripe.createToken(card).then(function (result) {
      if (result.error) {
        // Inform the customer that there was an error.
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        console.log(result)
        // Send the token to your server.
        stripeTokenHandler(result.token);
      }
    });

  };



  return (

    <form onSubmit={handleSubmit} id="payment-form">
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>

      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>

  );
};


export default PaymentForm;
