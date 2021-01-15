import React from "react";
import StripeCheckout from "react-stripe-checkout";
export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I9ynOAqPcUfuqcuvcRy3tTRAlBNveD7n94DjDxtkW6zEMF22QYGNoSQ7AXMiIhKFWRKFchYvfrsYmRUWWfJHmKU00m4DZAjmY";
  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }
  
    return <StripeCheckout 
    label="Pay Now"
    name="CRWN Clothing"
    billingAddress
    shippingAddress
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}
  />;
}
