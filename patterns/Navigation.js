const Navigation = ({ list }) => (
  <div className="container">
    <nav className="navigation">
      {list.map((item, idx) => <a href={item.link}>{item.label}</a>)}
    </nav>
  </div>
);

Navigation.defaultProps = {
  list: [
    {
      label: 'Item 1',
      link: '#',
    },
    {
      label: 'Item 2',
      link: '#',
    },
    {
      label: 'Item 3',
      link: '#',
    },
    {
      label: 'Item 4',
      link: '#',
    },
  ],
};

export default Navigation;
