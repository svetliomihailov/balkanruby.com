const Speaker = ({ name, avatar, link, children }) => (
  <div className="fourth">
    <div className="speaker">
      <a href={link}><img src={avatar} alt={name} /></a>
      <div className="content">
        <h4>
          <a href={link} className="card">{name}</a>
        </h4>
        {children}
      </div>
    </div>
  </div>
);

export default Speaker;
