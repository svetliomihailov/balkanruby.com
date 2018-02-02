import Container from '../docs/Container';
import ArticleList from '../patterns/ArticleList';
import LeadImageDark from '../patterns/LeadImageDark';
import Text from '../patterns/Text';
import SectionTitle from '../patterns/SectionTitle';

export default () => (
  <div className="">
    <Container theme="pink-bg" spacing="none">
      <div className="lead-image height-medium">
        <div className="overlay" style={{ opacity: 0.0 }} />
        <div className="grid">
          <div className="content-container align-center">
            <div className="container">
              <div className="headings">
                <img
                  src="/static/assets/balkanruby-header-logo.svg"
                  alt=""
                  className="logo"
                />
                <p>25 – 26 May 2018, Sofia, Bulgaria</p>
              </div>

              <div className="btn-wrapper">
                <a
                  href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2"
                  className="btn-primary lg"
                >
                  Submit a talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-both">
      <div className="container">
        <div className="grid">
          <div className="shift-2">
            <div className="section-title">
              <h2>Blog</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="none">
      <div className="container">
        <div className="grid">
          <div className="article-list">
            <div className="article">
              <h3>
                <a href="/post">Introducing Balkan Ruby</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="http://twitter.com/gsamokovarov" target="_blank">
                  G. Samokovarov
                </a>
              </div>
              <p>
                Meet Balkan Ruby, an event not just for Bulgaria, but the whole
                Balkan region. With it, we aim to introduce the local
                communities to each other and invite developers from all over
                Europe to come, share and exchange ideas with us. The dates are
                25th and 26th of May 2018, the city – Sofia, Bulgaria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-both">
      <div className="container">
        <div className="grid">
          <div className="shift-2">
            <div className="section-title">
              <h2>Subscribe for news</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="newsletter">
        <form
          action="//balkanruby.us16.list-manage.com/subscribe/post?u=690a4f9d71c3a29f39792b453&amp;id=d13d0bd575"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate=""
        >
          <div className="form-group">
            <input
              type="email"
              value=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="you@awesome.conf"
            />
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_690a4f9d71c3a29f39792b453_d13d0bd575"
              tabindex="-1"
              value=""
            />
          </div>
          <button
            type="submit"
            value="Subscribe"
            name="subscribe"
            className="btn-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </Container>

    <div className="site-footer yellow-bg">
      <div className="container">
        <div className="footer-cols">
          <div className="left-col">&copy; 2017. Neuevents</div>
          <div className="center-col">
            <a href="/legal">Legal</a>
            <a href="/code-of-conduct">Code of conduct</a>
            <a href="/contacts">Contacts</a>
          </div>
          <div className="right-col">
            launched by{' '}
            <a href="http://raketadesign.com" target="_blank">
              raketa
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
