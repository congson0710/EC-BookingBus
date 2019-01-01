import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { PAYPAL_CLIENTID } from '../common/const';

const client = {
  sandbox: PAYPAL_CLIENTID
};
class PaypalButton extends React.Component {
  render() {
    return <PaypalExpressBtn client={client} currency={'USD'} {...this.props} />;
  }
}

export default PaypalButton;
