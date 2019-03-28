import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const StripeWrapper = props => {
  // token is actually an object of entire charge
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={token => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}>
      <button className="btn">Add credits</button>
    </StripeCheckout>
  );
};

export default connect(
  null,
  actions,
)(StripeWrapper);
