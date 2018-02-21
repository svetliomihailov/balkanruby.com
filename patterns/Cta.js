const Cta = ({ title, description, primaryLink, primaryLabel, secondaryLink, secondaryLabel }) => (
  <div className="cta">
    <div className="container">
      <div className="grid">
        <div className="shift-1">
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: description }} />

          <div className="btn-wrapper">
            {primaryLabel && <a href={primaryLink} className="btn-primary">{primaryLabel}</a>}
            {secondaryLabel && <a href={secondaryLink} className="btn-secondary">{secondaryLabel}</a>}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Cta.defaultProps = {
  title: 'Call to action',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia, praesentium blanditiis quo, veniam necessitatibus saepe.',
  primaryLink: '#',
  primaryLabel: 'Primary',
  secondaryLink: '#',
  secondaryLabel: 'Secondary',
};

export default Cta;