const PageTitle = ({ title }) => (
  <div className="page-title">
    <div className="container">
      <h1>{title}</h1>
    </div>
  </div>
);

PageTitle.defaultProps = {
  title: 'Page title',
};

export default PageTitle;
