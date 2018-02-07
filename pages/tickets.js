import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';

import Tickets from '../patterns/tickets';

const EVENT = {
  id: 1,
  name: 'Balkan Ruby',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit necessitatibus deserunt minima, reprehenderit odit similique quibusdam libero praesentium cupiditate dignissimos et laboriosam voluptate.',
  active: true,
  ticket_types: [
    {id: 13, name: 'Early Bird', active: false, price: 79.0},
    {id: 14, name: 'Regular', active: true, price: 99.0},
    {id: 15, name: 'Workshop', active: true, price: 199.0},
  ],
};

export default () => (
  <Layout>
    <Helmet>
      <title>Tickets | Balkan Ruby</title>
    </Helmet>

    <Container theme="blank" spacing="spacing-both">
      <div className="container">
        <h1>Tickets</h1>

        <Tickets event={EVENT} />
      </div>
    </Container>
  </Layout>
);
