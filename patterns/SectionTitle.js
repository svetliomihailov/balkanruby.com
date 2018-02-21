const SectionTitle = ({ title }) => (
  <div className="container">
    <div className="grid">
      <div className="shift-2">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  </div>
);

SectionTitle.defaultProps = {
  title: 'Speakers',
};

export default SectionTitle;
