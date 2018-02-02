export default () => (
  <div className="lead-image dark-bg">
    <div className="bg-image">
      <img src="/static/images/header.jpg" alt="" />
    </div>

    <div className="overlay" style={{ opacity: 0.3 }} />

    <div className="grid">
      <div className="content-container align-center">
        <div className="container">
          <div className="headings">
            <h1>Lead image title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate nostrum necessitatibus nisi deserunt illum similique,
              nam eius perspiciatis enim aliquam doloremque accusantium dolorem
              quos omnis quam, quo corporis aperiam tenetur dolorum cumque.
            </p>
          </div>

          <div className="btn-wrapper">
            <a href="#" className="btn-primary lg invert">
              Primary
            </a>
            <a href="#" className="btn-secondary lg invert">
              Secondary
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
