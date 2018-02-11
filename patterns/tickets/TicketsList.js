import React from 'react';

class TicketsList extends React.Component {
  render() {
    const { ticketTypes, quantities, onChange } = this.props;

    return (
      <div className="tickets-list">
        <table>
          <thead>
            <tr>
              <th>Ticket category</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {ticketTypes.map(type =>
              <tr key={type.id}>
                <td>{type.name}</td>
                <td>EUR {type.price}</td>
                <td>
                  <input type="number" value={quantities.find(q => q.typeId === type.id).quantity} onChange={e => onChange(type.id, parseInt(e.target.value, 10))} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TicketsList;