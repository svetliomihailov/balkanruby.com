import React from 'react';
import TicketsList from './TicketsList';
import BuyerForm from './BuyerForm';
import IndividualTickets from './IndividualTickets';
import Payment from './Payment';

class Tickets extends React.Component {
  constructor(props) {
    super(props);

    const activeTicketTypes = props.event.ticket_types.filter(type => type.active === true);

    this.state = {
      activeTicketTypes,
      quantities: activeTicketTypes.map((type, idx) => { return { typeId: type.id, quantity: idx === 0 ? 1 : 0 } }),
      currentStep: 'tickets-list',
      buyer: {
        first_name: '',
        last_name: '',
        email: '',
        type: 'individual',
        isCompany: false,
        company: '',
        company_id: '',
        company_vat: '',
        company_country: '',
        company_city: '',
        company_zip: '',
        company_address: '',
      },
      tickets: [],
      paymentType: 'bank',
    };
  }

  updateQuantity(typeId, quantity) {
    const { quantities } = this.state;

    const idx = quantities.findIndex(q => q.typeId === typeId);
    const newQuantities = [
      ...quantities.slice(0, idx),
      { typeId, quantity },
      ...quantities.slice(idx + 1),
    ];

    this.setState({ quantities: newQuantities });
  }

  updateBuyer(field, value) {
    const { buyer } = this.state;
    const newBuyer = Object.assign({}, buyer, { [field]: value });
    this.setState({ buyer: newBuyer });
  }

  handleUpdateTicket(ticketType, idx, field, value) {
    const { tickets } = this.state;

    console.log('idx', idx)

    const newTickets = [
      ...tickets.slice(0, idx),
      Object.assign({}, tickets[idx], { [field]: value, ticketType }),
      ...tickets.slice(idx + 1),
    ];

    this.setState({ tickets: newTickets });
  }

  goToStep(step) {
    if (step === 'tickets') {
      // TODO: Validate quantities

      this.setState({ currentStep: 'tickets' });
      return;
    }

    if (step === 'customer-info') {
      // TODO: Validate tickets

      this.setState({ currentStep: 'customer-info' });
      return;
    }

    if (step === 'finish') {
      // TODO: Validate billing

      this.setState({ currentStep: 'finish' });
      return;
    }
  }

  render() {
    const { event } = this.props;
    const { currentStep, activeTicketTypes, quantities, buyer, tickets, paymentType } = this.state;

    const selectedTicketIds = quantities.filter(t => t.quantity > 0).map(t => t.typeId);
    const selectedTickets = activeTicketTypes.filter(t => selectedTicketIds.indexOf(t.id) !== -1)

    return (
      <div className="tickets-form">
        {currentStep === 'tickets-list' &&
          <div>
            <TicketsList
              ticketTypes={activeTicketTypes}
              quantities={quantities}
              onChange={(typeId, quantity) => this.updateQuantity(typeId, quantity)}
            />

            <button type="button" onClick={() => this.goToStep('tickets')} className="btn-primary">Order</button>
          </div>
        }

        {currentStep === 'tickets' &&
          <div>
            <IndividualTickets
              ticketTypes={selectedTickets}
              quantities={quantities}
              tickets={tickets}
              onChange={(ticketType, idx, field, value) => this.handleUpdateTicket(ticketType, idx, field, value)}
            />

            <button type="button" onClick={() => this.goToStep('customer-info')} className="btn-primary">Proceed</button>
          </div>
        }

        {currentStep === 'customer-info' &&
          <div>
            <BuyerForm
              ticketTypes={activeTicketTypes}
              quantities={quantities}
              buyer={buyer}
              onChange={(field, value) => this.updateBuyer(field, value)}
            />

            <Payment
              paymentType={paymentType}
              onChange={paymentType => this.setState({ paymentType })}
            />

            <button type="button" onClick={() => this.goToStep('finish')} className="btn-primary">Complete order</button>
          </div>
        }

        {currentStep === 'finish' &&
          <pre>
            {JSON.stringify({ tickets, buyer, paymentType }, null, 2)}
          </pre>
        }
      </div>
    );
  }
}

export default Tickets;