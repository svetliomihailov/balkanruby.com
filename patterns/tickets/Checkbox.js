import React from 'react';

const Checkbox = ({ type, name, label, value, checked, required, onChange }) => (
  <div className="form-group checkbox">
    <label>
      <input type={type} name={name} value={value} checked={checked} onChange={e => onChange(e.target.checked, e)} />
      <span>{label} {required ? '' : '(optional)'}</span>
    </label>
  </div>
);

Checkbox.defaultProps = {
  type: 'checkbox',
  optional: true,
  value: '',
};

export default Checkbox;
