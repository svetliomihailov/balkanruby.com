import Layout from '../layouts/Landing';
import Container from '../documentation/Container';
import ArticleList from '../patterns/ArticleList';
import LeadImageDark from '../patterns/LeadImageDark';
import Text from '../patterns/Text';
import SectionTitle from '../patterns/SectionTitle';
import Speaker from '../patterns/Speaker';
import Speakers from '../patterns/Speakers';

export default () => (
  <Layout>
    <Container theme="blank" spacing="none">
      <div className="lead-header">
        <div className="hero">
          <img src="/static/assets/balkanruby-header-logo.svg" alt="Balkan Ruby" className="logo" />
          <p>25 – 26 May 2018, Sofia, Bulgaria</p>
          <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" className="btn-primary lg">Submit a talk</a>
        </div>

        <div className="video-container">
          <video autoPlay loop poster="/static/images/landing-video/Wall-Sketching.jpg">
            <source src="/static/images/landing-video/Wall-Sketching.mp4" type="video/mp4" />
            <source src="/static/images/landing-video/Wall-Sketching.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </Container>

    <Container theme="pink-bg" spacing="spacing-both" id="newsletter">
      <div className="container">
        <div className="grid">
          <div className="shift-2">
            <div className="section-title">
              <h2>CFP closes on 14th of February, 2018!</h2>
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
                <a href="/blog/introducing-generator">The Venue</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="http://twitter.com/vestimir" target="_blank">
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
                <a href="http://twitter.com/gsamokovarov" target="_blank">
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

    <Speakers theme="blank" spacing="spacing-bottom">
      <Speaker
        name="Zach Holman"
        website="https://zachholman.com"
        avatar="/static/images/speakers/holman.png"
      >
        Zach Holman is a developer living in San Francisco. He
        joined GitHub in 2010 as one of their first engineering
        hires, and helped build and grow their product and culture
        over five years. Currently he’s the founder and CEO of {' '}
        <a href="http://during.com">During</a>, a new calendar to help you during your day. He also
        advises startups, including <a href="https://gitlab.com">GitLab</a> and {' '}
        <a href="https://dockbit.com">Dockbit</a>.
      </Speaker>

      <Speaker
        name="Robert Mosolgo"
        website="http://rmosolgo.github.io/"
        avatar="/static/images/speakers/rmosolgo.png"
      >
        Robert is a Ruby developer at GitHub, focused on the
        GraphQL API. In his free time, he likes spending time with
        his family, reading about programming language design, and
        doing upholstery projects.
      </Speaker>

      <Speaker
        name="Nick Sutterer"
        website="https://apotonick.wordpress.com"
        avatar="/static/images/speakers/nick.jpg"
      >
        Whenever Open-Source meets deep and profound debates about
        architecting software, and there's free beers involved,
        Nick Sutterer must be just around the corner. Say "Hi!" to
        him, he loves people.
      </Speaker>
    </Speakers>

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
