import React from 'react';
import Field from './Field';
import Checkbox from './Checkbox';

class BuyerForm extends React.Component {
  render() {
    const { quantities, ticketTypes, buyer, onChange } = this.props;

    return (
      <div>
        <h3>Billing information</h3>

        <Field label="First name" value={buyer.first_name} onChange={first_name => onChange('first_name', first_name)} required />
        <Field label="Last name" value={buyer.last_name} onChange={last_name => onChange('last_name', last_name)} required />
        <Field label="Email" value={buyer.email} onChange={email => onChange('email', email)} required type="email" />
        <Field label="Country" value={buyer.country} onChange={country => onChange('country', country)} required />

        <Checkbox label="This is a company" value={buyer.isCompany} onChange={isCompany => onChange('isCompany', isCompany)} />

        {buyer.isCompany &&
          <div>
            <Field label="Company" value={buyer.company} onChange={company => onChange('company', company)} required />
            <Field label="Company ID" value={buyer.company_id} onChange={company_id => onChange('company_id', company_id)} required />
            <Field label="Company VAT" value={buyer.company_vat} onChange={company_vat => onChange('company_vat', company_vat)} required />
            <Field label="Country" value={buyer.company_country} onChange={company_country => onChange('company_country', company_country)} required />
            <Field label="City" value={buyer.company_city} onChange={company_city => onChange('company_city', company_city)} required />
            <Field label="ZIP" value={buyer.company_zip} onChange={company_zip => onChange('company_zip', company_zip)} required />
            <Field label="Address" value={buyer.company_address} onChange={company_address => onChange('company_address', company_address)} required />
          </div>
        }
      </div>
    );
  }
}

export default BuyerForm;
