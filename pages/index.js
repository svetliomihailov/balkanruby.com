import Layout from '../layouts/Landing';

import Container from '../docs/Container';
import ArticleList from '../patterns/ArticleList';
import LeadImageDark from '../patterns/LeadImageDark';
import Text from '../patterns/Text';
import SectionTitle from '../patterns/SectionTitle';

export default () => (
  <Layout>
    <Container theme="blank" spacing="none">
      <div className="lead-image height-large">
        <div className="overlay" style={{ opacity: 0.4 }} />

        <div className="bg-image">
          <img src="/static/images/homepage-mobile.jpg" alt="" />
          <img src="/static/images/homepage.jpg" alt="" />
        </div>

        <div className="grid">
          <div className="content-container align-center">
            <div className="container">
              <div className="headings">
                <img
                  src="/static/assets/balkanruby-header-logo-white.svg"
                  alt=""
                  className="logo"
                />
                <p className="inverted-text-bg">25 – 26 May 2018, Sofia, Bulgaria</p>
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

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="article-list">
            <div className="article">
              <h3>
                <a href="/blog/introducing-generator">Introducing our venue – Generator Sofia</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="http://twitter.com/vestimir" target="_blank">
                  Vestimir
                </a>
              </div>
              <p>
              Today we are excited to reveal the location for Balkan Ruby! The conference will be held on 25th and 26th of May at Generator Sofia.
              </p>
              <p>
              Learn more about our venue and the surrounding area.
              </p>
            </div>

            <div className="article">
              <h3>
                <a href="/blog/cfp-time">CFP Time</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="http://twitter.com/gsamokovarov" target="_blank">
                  Genadi
                </a>
              </div>
              <p>
              The Balkans are such a nice place to be and we can help you get here for free through our <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" targe="_blank">Call for Papers</a>!
              </p>
            </div>

            <div className="article">
              <h3>
                <a href="/blog/announcement">Introducing Balkan Ruby</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="http://twitter.com/gsamokovarov" target="_blank">
                  Genadi
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

    <Container theme="purple-bg" spacing="spacing-both" id="newsletter">
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

    <Container theme="purple-bg" spacing="none">
      <div className="newsletter">
        <form
          action="//balkanruby.us16.list-manage.com/subscribe/post?u=690a4f9d71c3a29f39792b453&amp;id=d13d0bd575"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate=""
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
              tabIndex="-1"
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
  </Layout>
);
