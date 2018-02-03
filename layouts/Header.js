import Container from '../docs/Container';

export default () => (
  <Container theme="purple-bg" spacing="none">
    <div className="container">
      <div className="site-header inverted-text-bg">
        <a href="/" className="logo">
          <img src="/static/assets/balkanruby-logo-white.svg" alt="" className="logo" />
        </a>

        <nav className="lead-navigation">
          <a href="/">Blog</a>
          <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" target="_blank">Submit talk</a>
        </nav>
      </div>
    </div>
  </Container>
);
