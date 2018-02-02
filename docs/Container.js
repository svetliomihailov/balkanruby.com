export default ({ theme, spacing, className, children }) => (
  <div className={[theme, spacing, className].join(' ')}>{children}</div>
);
