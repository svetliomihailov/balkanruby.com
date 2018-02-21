const Thumb = ({ title, description, link, image }) => (
  <div className="partner grid">
    <div className="third">
      <a href={link} className="partner-logo"><img src={image} alt={title} /></a>
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

const PatnerFeed = ({ list }) => (
  <div className="partner-feed">
    <div className="container">
      {list.map((item, idx) =>
        <Thumb key={idx} {...item} />)}
    </div>
  </div>
);

PatnerFeed.defaultProps = {
  list: [
    {
      image: 'http://placehold.it/400x300',
      link: '#',
      title: 'Article Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus, doloribus modi perspiciatis dicta eius mollitia minus assumenda, iusto placeat culpa aliquam iure obcaecati distinctio commodi sequi vitae sapiente non.',
    },
    {
      image: 'http://placehold.it/400x300',
      link: '#',
      title: 'Article Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus, doloribus modi perspiciatis dicta eius mollitia minus assumenda, iusto placeat culpa aliquam iure obcaecati distinctio commodi sequi vitae sapiente non.',
    },
    {
      image: 'http://placehold.it/400x300',
      link: '#',
      title: 'Article Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus, doloribus modi perspiciatis dicta eius mollitia minus assumenda, iusto placeat culpa aliquam iure obcaecati distinctio commodi sequi vitae sapiente non.',
    },
  ],
};

export default PatnerFeed;
