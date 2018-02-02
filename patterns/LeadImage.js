export default () => (
  <div className="lead-image">
    <div className="bg-image">
      <img src="/static/images/mountain.jpg" alt="" />
    </div>

    <div className="overlay" style={{ opacity: 0 }} />

    <div className="grid">
      <div className="content-container align-center">
        <div className="container">
          <div className="headings">
            <h1>Lead image title with rather long title</h1>
            <p>This is the sub-title. You can put more text here.</p>
          </div>

          <div className="btn-wrapper">
            <a href="#" className="btn-primary lg">
              Primary
            </a>
            <a href="#" className="btn-secondary lg">
              Secondary
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
