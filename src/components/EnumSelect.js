import React from 'react';

const EnumSelect = ({ label, options, value, onChange }) => {
  return (
    <div className="select-wrapper">
      <h3>{label}</h3>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EnumSelect;
