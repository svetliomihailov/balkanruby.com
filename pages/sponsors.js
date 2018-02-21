import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import PartnerFeed from '../patterns/PartnerFeed';
import Cta from '../patterns/Cta';
import Text from '../patterns/Text';

const SPONSORS = [
  {
    image: '/static/images/sponsors/emerchantpay_logo.svg',
    link: 'https://www.emerchantpay.com/',
    title: 'eMerchantPay',
    description: '<p>eMerchantPay is a leading online, mobile and POS payment service provider. We help e-commerce businesses of all sizes and sectors accept payments via multiple customer touch points. Designed to increase conversions, our offering includes robust payment processing technology, coupled with popular alternative payment methods and a range of acquiring services. eMerchantPay Limited is registered as an authorised Electronic Money Institution (EMI) and has the FCA’s permission to issue electronic money (e-money) and provide payment services under registration number <a href="https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000003jN1U9AAK">900778</a>.</p><p>We are a self-funded, product-based company, and working on a number of challenging (both code and infrastructure), high-uptime (99.99%) payment products, utilising predominantly the Ruby and Rails stack.</p>',
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
      <title>Partners | Balkan Ruby</title>
    </Helmet>

    <PageTitle title="Partners" />

    <Text centered text="<p>Balkan Ruby is supported by these awesome companies</p>" />

    <br/>

    <Container theme="blank" spacing="spacing-both">
      <PartnerFeed list={SPONSORS} />
    </Container>

    <Container theme="light-bg" spacing="spacing-both">
      <Cta {...CTA} />
    </Container>
  </Layout>
);
