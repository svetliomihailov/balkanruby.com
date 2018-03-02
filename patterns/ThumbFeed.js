const Thumb = ({ title, description, link, image }) => (
  <div className="grid thumb">
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
      {list.map((item, idx) =>
        <Thumb key={idx} {...item} />)}
    </div>
  </div>
);

ThumbFeed.defaultProps = {
  list: [
    {
      image: 'https://placehold.it/400x300',
      link: '#',
      title: 'Article Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus, doloribus modi perspiciatis dicta eius mollitia minus assumenda, iusto placeat culpa aliquam iure obcaecati distinctio commodi sequi vitae sapiente non.',
    },
    {
      image: 'https://placehold.it/400x300',
      link: '#',
      title: 'Article Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus, doloribus modi perspiciatis dicta eius mollitia minus assumenda, iusto placeat culpa aliquam iure obcaecati distinctio commodi sequi vitae sapiente non.',
    },
    {
      image: 'https://placehold.it/400x300',
      link: '#',
      title: 'Article Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus, doloribus modi perspiciatis dicta eius mollitia minus assumenda, iusto placeat culpa aliquam iure obcaecati distinctio commodi sequi vitae sapiente non.',
    },
  ],
};

export default ThumbFeed;
