import React from 'react';
import Field from './Field';

const getCount = (quantities, typeId) => quantities.find(q => parseInt(q.typeId, 10) === parseInt(typeId, 10)).quantity;
const getIterator = count => Array.from(Array(count).keys());

const IndividualTickets = ({ ticketTypes, quantities, tickets, onChange }) => (
  <div>
    {ticketTypes.map(type => (
      <div key={type.id}>
        <h3>{type.name}</h3>

        {getIterator(getCount(quantities, type.id)).map(i => (
          <div key={i}>
            <h4>Ticket {i + 1}: €{type.price}</h4>

            <Field label="First name" value={tickets[i] && tickets[i].first_name} onChange={first_name => onChange(type.id, parseInt(i, 10), 'first_name', first_name)} required />
            <Field label="Last name" value={tickets[i] && tickets[i].last_name} onChange={last_name => onChange(type.id, parseInt(i, 10), 'last_name', last_name)} required />
            <Field label="Email" value={tickets[i] && tickets[i].email} onChange={email => onChange(type.id, parseInt(i, 10), 'email', email)} required />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default IndividualTickets;
