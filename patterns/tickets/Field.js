import React from 'react';

const Field = ({ type, label, value, required, onChange }) => (
  <div className="form-group">
    <label>{label} {required ? '' : '(optional)'}</label>
    <input type={type} value={value} onChange={e => onChange(e.target.value, e)} />
  </div>
);

Field.defaultProps = {
  type: 'text',
  optional: true,
  value: '',
};

export default Field;
