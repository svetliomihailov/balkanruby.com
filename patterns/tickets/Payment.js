import React from 'react';
import Field from './Field';
import Checkbox from './Checkbox';

class Payment extends React.Component {
  render() {
    const { paymentType, onChange } = this.props;

    return (
      <div>
        <h3>Payment type</h3>

        <Checkbox name="payment_type" type="radio" label="Bank transfer" value={paymentType} checked={paymentType === 'bank'} onChange={paymentType => onChange('bank')} required />
        <Checkbox name="payment_type" type="radio" label="Card" value={paymentType} checked={paymentType === 'card'} onChange={paymentType => onChange('card')} required />
      </div>
    );
  }
}

export default Payment;
