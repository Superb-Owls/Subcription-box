
import React, { useMemo } from "react";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
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


const PaymentForm = (props) => {


  console.log('THESE r PROPS ********** payment form ********', props);


  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();


  const handleSubmit = async event => {
    if (event) {
      event.preventDefault()
    }

    var response = fetch("http://localhost:3001/api/chargestripe").then(function (response) {
      return response.json();
    }).then(function (responseJson) {

      console.log('WE got this back fromt he BE!!!!!', responseJson);
      var clientSecret = responseJson.client_secret;

      const card = elements.getElement(CardNumberElement);
      console.log('HERE IS NEW CARD!!!!! !!!!!!!!!', card)

      // Call stripe.confirmCardPayment() with the client secret.
      stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: card },
        }
      ).then(function (result) {
        console.log('GOT this back from the CONFIRM stripe!!!', result)
        if (result.error) {
          // Display error.message in your UI.
          alert("ERROR")
        } else {
          // The payment has succeeded
          // Display a success message
          alert("SUCCESS")
        }
      });
    });

  }

  if (props.purchase === true) {
    handleSubmit()
  }

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

      <button type="submit" disabled={!stripe} data-secret="{{ client_secret }}">
        Pay
      </button>
    </form>

  );
}


export default PaymentForm



