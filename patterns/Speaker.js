const Speaker = ({ name, avatar, website, children }) => (
  <div className="third">
    <div className="card">
      <img src={avatar} alt={name} />
      <div className="content">
        <h4>
          <a href={website} className="card">{name}</a>
        </h4>
        <p>{children}</p>
      </div>
    </div>
  </div>
);

export default Speaker;
