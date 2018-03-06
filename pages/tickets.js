import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';

import Tickets from '../patterns/tickets';

export default () => (
  <Layout>
    <Helmet>
      <title>Tickets | Balkan Ruby</title>
    </Helmet>

    <Container theme="blank" spacing="spacing-both">
      <div className="container">
        <h1>Tickets</h1>

        <script src="https://cdn.weemss.com/compiled/js/integration-embed.js?v79.7"></script>
        <iframe src="https://event.gg/9100/form" id="weemss_integration_9100" frameBorder="0" width="100%" height="100%" scrolling="no"></iframe>
      </div>
    </Container>
  </Layout>
);
