const Speaker = ({ name, avatar, website, children }) => (
  <div className="fourth">
    <div className="speaker">
      <a href="/speakers"><img src={avatar} alt={name} /></a>
      <div className="content">
        <h4>
          <a href="/speakers" className="card">{name}</a>
        </h4>
        <p>{children}</p>
      </div>
    </div>
  </div>
);

export default Speaker;
