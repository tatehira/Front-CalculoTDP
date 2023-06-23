import React from 'react';

const ProcessadorInput = ({ value, onChange }) => {
  return (
    <div className="input-wrapper">
      <h3>Processador</h3>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default ProcessadorInput;
