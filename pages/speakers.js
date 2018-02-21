import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import ThumbFeed from '../patterns/ThumbFeed';
import Cta from '../patterns/Cta';
import Text from '../patterns/Text';

const SPEAKERS = [
  {
    image: '/static/images/speakers/holman.png',
    link: 'https://zachholman.com/',
    title: 'Zach Holman, CEO During',
    description: '<p>Zach Holman is a developer living in San Francisco. He joined GitHub in 2010 as one of their first engineering hires, and helped build and grow their product and culture over five years. Currently he’s the founder and CEO of <!-- --> <a href="http://during.com">During</a>, a new calendar to help you during your day. He also advises startups, including <a href="https://gitlab.com">GitLab</a> and <!-- --> <a href="https://dockbit.com">Dockbit</a>.</p>',
  },
  {
    image: '/static/images/speakers/rmosolgo.png',
    link: 'http://rmosolgo.github.io/',
    title: 'Robert Mosolgo, GitHub',
    description: '<p>Robert is a Ruby developer at GitHub, focused on the GraphQL API. In his free time, he likes spending time with his family, reading about programming language design, and doing upholstery projects.</p>',
  },
  {
    image: '/static/images/speakers/nick.jpg',
    link: 'https://apotonick.wordpress.com/',
    title: 'Nick Sutterer, Trailblazer',
    description: '<p>Whenever Open-Source meets deep and profound debates about architecting software, and there\'s free beers involved, Nick Sutterer must be just around the corner. Say "Hi!" to him, he loves people.</p>',
  },
];

const CTA = {
  title: 'Become a partner',
  description: '<p>If your company is interested in supporting Balkan Ruby, you can learn more about the partner opportunities by following the link below.</p>',
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

    <Text centered text="<p>Balkan Ruby is supported by these awesome companies</p>" />

    <br/>

    <Container theme="blank" spacing="spacing-both">
      <ThumbFeed list={SPEAKERS} />
    </Container>
  </Layout>
);
