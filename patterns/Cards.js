export default () => (
  <div className="container">
    <div className="cards">
      <div className="grid">
        {[1, 2, 3].map((idx) => (
          <div key={idx} className="third">
            <a href="#" className="card">
              <img src="/static/images/juan-davila-153912.jpg" alt="" />
              <div className="content">
                <h4>Card title</h4>
                <p>
                  Lorem ipsum dolor sit amet nostrum necessitatibus nam eius
                  enim sit amet consectetur.
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);
