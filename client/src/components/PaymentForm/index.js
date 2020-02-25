import React from 'react';
import "./style.css"

function PaymentForm() {
  return (
    <form>
      <label className="paymentForm">First Name</label>
      <input type="text" placeholder="" />
      <label className="paymentForm">Last Name</label>
      <input  type="text" placeholder="" />
      <label className="paymentForm">Address</label>
      <input type="address" placeholder="" />
      <label for="exp-date">Exp. Date (month and year):</label>
    <input type="month" id="exp-month" name="exp-month" />
    </form>
  );
}

export default PaymentForm;
