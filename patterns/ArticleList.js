export default () => (
  <div className="container">
    <div className="grid">
      <div className="article-list">
        {[1, 2, 3].map(() => (
          <div className="article">
            <h3>
              <a href="#">
                Lorem ipsum dolor sit nostrum necessitatibus ipsum dolor
              </a>
            </h3>
            <div className="meta">
              by <a href="#">John Doe</a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate nostrum necessitatibus nisi deserunt illum similique,
              nam eius perspiciatis enim aliquam doloremque accusantium dolorem
              quos omnis quam, quo corporis aperiam tenetur dolorum cumque.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
