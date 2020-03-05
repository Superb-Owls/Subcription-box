import React from 'react';
import './style.css'

function OrderTotal(props) {
    var total = 0
    
    for (let i = 0; i < props.comicsArray.length; i++) {
       total += props.comicsArray[i].price
        console.log(props.comicsArray[i].price);
  
     }
       var tax = total * 0.07
    var cleanTax = tax.toFixed(2)
    var shipping = 5
    var finalTotal = parseInt(total) + parseFloat(cleanTax) + parseInt(shipping)
    // console.log('calculatedTotal in order total!!!!', calculatedTotal)

     if (props.comicsArray.length >=1) {
         
         console.log('finalTotal',finalTotal);
         console.log('cleanTax', cleanTax)
         
         
         return (
        <>
        
            <div className="totalWrapper">
                <div className="subtotal">Subtotal: ${total}</div>
                <div className="estShipping">Estimated Shipping: $5</div>
                <div className="salesTax">Sales Tax: ${cleanTax}</div>
                <div className="ordertotal">You pay: ${finalTotal.toFixed(2)}</div>
                <button onClick={() => { props.setPurchase(true) }}>Place Your Order</button>
            </div>
        </>
    )
     }
     else {
         return (
             <h1>Cart Is Empty</h1>
         )
     }
    
}

export default OrderTotal;
