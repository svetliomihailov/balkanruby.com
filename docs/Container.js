export default ({ theme, spacing, className, id, children }) => (
  <div className={[theme, spacing, className].join(' ')} id={id}>{children}</div>
);
