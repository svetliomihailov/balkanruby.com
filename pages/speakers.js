import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import ThumbFeed from '../patterns/ThumbFeed';
import Cta from '../patterns/Cta';
import store from '../store';

const SPEAKERS = store.speakers.map(speaker => ({
  image: speaker.image,
  link: speaker.link,
  title: `${speaker.name}, ${speaker.company}`,
  description: speaker.bio,
}));

const CTA = {
  title: 'Become a partner',
  description: `
    <p>
      If your company is interested in supporting Balkan Ruby, you can learn more
      about the partner opportunities by following the link below.
    </p>
  `,
  primaryLink: '/static/files/balkan_ruby_packages.pdf',
  primaryLabel: 'View packages',
  secondaryLink: '#',
  secondaryLabel: '',
};

export default () => (
  <Layout>
    <Helmet>
      <title>Speakers | Balkan Ruby</title>
    </Helmet>

    <PageTitle title="Speakers" />

    <Container theme="blank" spacing="spacing-both">
      <ThumbFeed list={SPEAKERS} />
    </Container>
  </Layout>
);
