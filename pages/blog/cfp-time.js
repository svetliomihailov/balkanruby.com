import Layout from '../../layouts/Default';
import Container from '../../docs/Container';

export default () => (
  <Layout>
    <Container theme="blank" spacing="none">
      <div className="container">
        <div className="article-title">
          <h1>CFP Time</h1>
          <div className="meta">
            8 January 2018 //{' '}
            <a href="http://twitter.com/gsamokovarov" target="_blank">
              Genadi
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
            The Balkans are such a nice place to be and we can help you get here through our <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" target="_blank">Call for Papers</a>!
            </p>

            <h2>What are we looking for?</h2>

            <p>
            The conference will run on a single track. We are looking for 14 talks and few trainings, given there is enough interest. The length of a talk should be from 30 to 40 minutes with a topic about Ruby, satellite technologies, community or weird. Boy, oh boy… do we like weird! C'mon, it is Ruby, it’s in our blood!
            </p>

            <p>
            The <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" target="_blank">CFP is open until 14th of February</a> and we cannot wait to hear about your ideas.
            </p>

            <h2>What if I’m selected?</h2>

            <p>
            If you are selected we will provide the travelling accommodations to Sofia, Bulgaria! This means the flight and the hotel will be covered for you.
            </p>

            <p>
            You’ll also get to share your Ruby love to the local Ruby community. ❤️
            </p>

            <h2>Thank You</h2>

            <p>
            Have you missed something? Do you have a question? Please hit us up <a href="https://twitter.com/balkanruby" target="_blank">@balkanruby</a> and we’ll make our best to answer you.
            </p>

            <br/>
            <br/>

            <p>
              <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" class="btn-primary lg">Submit a talk</a>
            </p>
            <br/>

          </div>
        </div>
      </div>
    </Container>
  </Layout>
);
