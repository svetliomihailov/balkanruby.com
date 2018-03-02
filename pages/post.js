import Container from '../documentation/Container';

export default () => (
  <div className="">
    <Container theme="blank" spacing="none">
      <div className="container">
        <div className="article-title">
          <h1>Introducing Balkan Ruby</h1>
          <div className="meta">
            19 December 2017 //{' '}
            <a href="https://twitter.com/gsamokovarov" target="_blank">
              G. Samokovarov
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
              Hi there. We are Genadi, Vestimir, Svetlio & Svetlio. It’s nice to
              meet you! 🙌
            </p>

            <p>
              We don’t get many Ruby conferences in our part of the world. In
              fact, we didn’t have any until we hosted{' '}
              <a href="https://euruko2016.org" target="_blank">
                EuRuKo in 2016
              </a>. With the community in town and the fun it brought, we wanted
              to organize more local Ruby events. In 2017, we were focused on{' '}
              <a href="https://partialconf.com" target="_blank">
                Partial
              </a>, the first functional conference in Bulgaria. In 2018, we
              want to bring that Ruby conference to life.
            </p>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <figure className="single-image">
          <img src="/static/images/37879446982_07ea03bd06_o.jpg" alt="" />
          <figcaption>(cc) Adam Hinett</figcaption>
        </figure>
      </div>
    </Container>

    <Container theme="blank" spacing="none">
      <div className="container">
        <div className="grid">
          <div className="text">
            <p>
              Meet <b>Balkan Ruby</b>, an event not just for Bulgaria, but the
              whole Balkan region. With it, we aim to introduce the local
              communities to each other and invite developers from all over
              Europe to come, share and exchange ideas with us. The dates are{' '}
              <b>25th and 26th of May 2018</b>, the city – Sofia, Bulgaria.{' '}
              <a
                href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NjlxNnVpNjhpZTNtZXU5cjAyMWJidnR2ZWIgYmFsa2FucnVieS5jb21fNzgxcWc5dDN2dDVhYWp0Mm5mazZkYjcwcnNAZw&tmsrc=balkanruby.com_781qg9t3vt5aajt2nfk6db70rs%40group.calendar.google.com"
                target="_blank"
              >
                Mark your calendars!
              </a>
            </p>

            <p>
              We have a{' '}
              <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2">
                call for papers open
              </a>{' '}
              until <b>14th of February</b> and we welcome you to send your
              proposals. The topics should gravitate around Ruby. We like
              everything weird, technical, and social. Balkan Ruby is a great
              opportunity to visit Sofia and present in front of like-minded
              developers.
            </p>

            <p>
              In the coming weeks we’ll announce more details about the venue
              and the tickets.{' '}
              <a href="https://twitter.com/balkanruby">Follow us on Twitter</a>,
              or <a href="/">subscribe to the newsletter</a>. If you have any
              questions drop us a line at{' '}
              <a href="mailto:hi@balkanruby.com">hi@balkanruby.com</a>
            </p>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="" spacing="none">
      <div className="lead-image height-min">
        <div className="grid">
          <div className="content-container align-center">
            <div className="container">
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
            <a href="https://raketadesign.com" target="_blank">
              raketa
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
