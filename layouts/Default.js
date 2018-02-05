import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <Helmet>
      <title>Balkan Ruby – 25-26 May, Sofia Bulgaria</title>
      <meta name="description" content="Brand new conference about Ruby and satellite technologies. Visit Sofia, Bulgaria and meet like-minded Ruby developers from all over Europe." />
    </Helmet>

    <Header />
    {children}
    <Footer />
  </div>
);
