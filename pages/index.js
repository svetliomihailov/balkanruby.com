import Layout from '../layouts/Landing';
import Container from '../documentation/Container';
import ArticleList from '../patterns/ArticleList';
import LeadImageDark from '../patterns/LeadImageDark';
import Text from '../patterns/Text';
import SectionTitle from '../patterns/SectionTitle';
import Speaker from '../patterns/Speaker';
import Speakers from '../patterns/Speakers';
import Navigation from '../patterns/Navigation';
import store from '../store';

const NAV = {
  list: [
    {
      label: 'Speakers',
      link: '/speakers',
    },
    {
      label: 'Partners',
      link: '/sponsors',
    },
    {
      label: 'Blog',
      link: '/blog',
    },
  ],
};

export default () => (
  <Layout>
    <Container theme="blank" spacing="none">
      <div className="lead-header">
        <div className="hero">
          <img src="/static/assets/balkanruby-header-logo.svg" alt="Balkan Ruby" className="logo" />
          <p>25 – 26 May 2018; Sofia, Bulgaria</p>
          <a href="#newsletter" className="btn-primary lg">Subscribe</a>
        </div>

        <div className="video-container">
          <video autoPlay loop poster="/static/images/landing-video/Wall-Sketching.jpg">
            <source src="/static/images/landing-video/Wall-Sketching.mp4" type="video/mp4" />
            <source src="/static/images/landing-video/Wall-Sketching.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </Container>

    <Container theme="light-bg" spacing="none">
      <Navigation {...NAV} />
    </Container>

    <br/>
    <br/>

    <SectionTitle title="About the conference" />

    <br/>

    <Text centered text="<p>Balkan Ruby is a brand new conference, dedicated to Ruby and satellite technologies.</p><p>We aim to introduce the local communities to each other and invite companies and developers from all over Europe to visit the Balkan region, learn new technologies and share ideas with us.</p>" />

    <br/>

    <Container id="speakers" theme="blank" spacing="spacing-both" container>
      <div className="container">
        <div className="grid">
          <div className="shift-2">
            <div className="section-title">
              <h2>Speakers</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <br/>

    <Speakers theme="blank" spacing="spacing-bottom">
      {store.speakers.map((speaker, idx) =>
        <Speaker
          key={idx}
          name={speaker.name}
          link={`/speakers#${idx}`}
          avatar={speaker.image}
        >
          <p>{speaker.talk}</p>
        </Speaker>
      )}
    </Speakers>

    <Container theme="light-bg" spacing="spacing-both">
      <div className="container">
        <div className="grid">
          <div className="shift-2">
            <div className="section-title">
              <br/>
              <h2>Blog</h2>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="light-bg" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="article-list">
            <div className="article">
              <h3>
                <a href="/blog/introducing-generator">The Venue</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="https://twitter.com/vestimir" target="_blank">
                  Vestimir
                </a>
              </div>
              <p>
                Today we are excited to reveal the venue for Balkan Ruby! The
                conference will be held on 25th and 26th of May at Generator
                Sofia.
              </p>
            </div>

            <div className="article">
              <h3>
                <a href="/blog/cfp-time">CFP Time</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="https://twitter.com/gsamokovarov" target="_blank">
                  Genadi
                </a>
              </div>
              <p>
                The Balkans are such a nice place to be and we can help you get
                here for free through our <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" targe="_blank">Call for Papers</a>!
              </p>
            </div>

            <div className="article">
              <h3>
                <a href="/blog/announcement">Introducing Balkan Ruby</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="https://twitter.com/gsamokovarov" target="_blank">
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
