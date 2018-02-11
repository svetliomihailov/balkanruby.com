export default ({ theme, spacing, className, id, container, children }) => {
  const content = container ? (
    <div className="container">
      {children}
    </div>
  ) : children;

  return (
    <div className={[theme, spacing, className].join(' ')} id={id}>
      {content}
    </div>
  );
};
