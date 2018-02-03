import Helmet from 'react-helmet';
import Container from '../docs/Container';

export default () => (
  <div className="site-header-wrapper">
    <Container theme="purxle-bg" spacing="none">
      <div className="container">
        <div className="site-header inverxted-text-bg">
          <a href="/" className="logo">
            <img src="/static/assets/balkanruby-logo.svg" alt="" className="logo" />
          </a>

          <nav className="lead-navigation">
            <a href="/">Blog</a>
            <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" target="_blank">Submit talk</a>
          </nav>
        </div>
      </div>
    </Container>
  </div>
);
