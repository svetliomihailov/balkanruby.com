export default ({ title, description, children }) => (
  <div className="docs-pattern">
    <div className="container">
      <h2 className="docs-pattern-title">{title}</h2>
      {description !== '' && (
        <p className="docs-pattern-description">{description}</p>
      )}
    </div>

    <div className="docs-pattern-wrapper">{children}</div>
  </div>
);
