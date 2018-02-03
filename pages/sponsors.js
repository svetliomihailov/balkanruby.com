import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import Slider from '../patterns/Slider';

export default () => (
  <Layout>
    <Helmet>
      <title>Become a partner | Balkan Ruby</title>
    </Helmet>

    <Container theme="blank" spacing="spacing-both">
      <div className="container">
        <div className="grid">
          <div className="text">
            <h1>Partnership opportunities</h1>

            <p><strong>Balkan Ruby</strong> is a brand new conference, dedicated to Ruby and satellite technologies.</p>
            <p>We aim to introduce the local communities to each other and invite companies and developers from all over Europe to visit the Balkan region, learn new technologies and share ideas with us.</p>
            <p>We expect about 150 attendees from all around Europe, the majority of whom are Ruby and JavaScript developers.</p>

            <br/>
            <a href="/static/files/balkan_ruby_packages.pdf" className="btn-primary" target="_blank">View the packages</a>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </Container>

  </Layout>
);
