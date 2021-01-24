import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IBge5GrxPzaHsCXGVOz7uAektaCJ6NtoQnmno4HUjc3Oo5WFAWk9d6e7W9OHUqxvFEerKUp9sItTpWerAw8ao5s00efCn6C9W'

    const onToken = token => {
        console.log(token)
        // alert('Payment successful')
        axios({
            url: 'payment',
            method: 'POST',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert('There was an issue with your payment')
        })
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Buy'em all"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        >
            
        </StripeCheckout>
    )
}

export default StripeCheckoutButton