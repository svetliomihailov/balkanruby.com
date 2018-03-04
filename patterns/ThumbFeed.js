const Thumb = ({ id, title, description, link, image }) => (
  <div id={id} className="grid thumb">
    <div className="fourth">
      <img src={image} alt={title} />
    </div>
    <div className="eight">
      <h3>{title}</h3>
      <div className="meta">
        <a href={link}>{link}</a>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

const ThumbFeed = ({ list }) => (
  <div className="thumb-feed">
    <div className="container">
      {list.map((item, idx) => <Thumb id={idx} key={idx} {...item} />)}
    </div>
  </div>
);

export default ThumbFeed;
