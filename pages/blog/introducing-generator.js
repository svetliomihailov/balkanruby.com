import Helmet from 'react-helmet';

import Layout from '../../layouts/Default';
import Container from '../../documentation/Container';
import Slider from '../../patterns/Slider';

export default () => (
  <Layout>
    <Helmet>
      <title>The Venue | Balkan Ruby</title>
    </Helmet>

    <Container theme="blank" spacing="none">
      <div className="container">
        <div className="article-title">
          <h1>The Venue</h1>
          <div className="meta">
            2 February 2018 //{' '}
            <a href="https://twitter.com/vestimir" target="_blank">
              Vestimir
            </a>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="text">
            <p>
              Today we are excited to reveal the venue for <strong>Balkan Ruby</strong>!
              The conference will be held on <strong>25th and 26th of May</strong> at <strong>Generator Sofia</strong>.
            </p>

            <p>
              <a href="https://generatorsofia.com" target="_blank">Generator</a> opened its hall last year in the renovated Vitosha Factory. It is a playground for collaboration, inspiration and experience sharing between creatives, businesses and the public sector. Over the past few months Generator has hosted several workshops and meetups and we really liked the vibe of the place. It is a bright hall with lots of natural light, huge screen and functional, cozy interior.
            </p>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <Slider>
          {[
            'VHG_4001.jpg',
            'VHG_4015.jpg',
            'VHG_4005.jpg',
            '_DSC4848gm.jpg',
            'VHG_3989.jpg',
            'VHG_4106.jpg',
          ].map(image => (
            <Slider.Slide key={image}>
              <figure className="single-image">
                <img src={`/static/images/venue/${image}`} alt="" />
                <figcaption>Radina Gancheva // Under the Line</figcaption>
              </figure>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="text">
            <p>
            The location is well connected with public transport and the area has diverse restaurants, several hotels, shopping center, and a park.
            </p>

            <p>
            Here comes the <strong>South Park</strong> (not that one, sorry Kyle) – one of the jewels of our town! Sofia really shines during the spring, so having a proper green patch near the venue was an important feat for us.
            </p>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.989991843448!2d23.31657601558825!3d42.66156747916772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa845bd23fdfe5%3A0x1d6101a4386c8e4d!2sThe+Generator+-+Center+for+Design+and+Innovation!5e0!3m2!1sbg!2sbg!4v1517586447558" width="100%" height="500" frameBorder="0" style={{ style: 0 }} allowFullScreen></iframe>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="text">
            <p>
            For <strong>Balkan Ruby</strong>, our team spent more than a month revisiting our favourite spots in Sofia, devoted to finding the perfect location. We are pretty happy with our choice and we can’t wait to meet you at <strong>Generator Sofia on 25th of May</strong>.
            </p>

            <p>
              <em>
                For the latest information about Balkan Ruby <a href="https://twitter.com/balkanruby" target="_blank">follow us on Twitter</a>, or <a href="/#newsletter">subscribe to our newsletter</a>. We will have some great news to share with you in the coming weeks.
              </em>
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);
