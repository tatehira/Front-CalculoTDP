import React from 'react';

const PlacaVideoInput = ({ value, onChange }) => {
  return (
    <div className="input-wrapper">
      <h3>Placa de vídeo</h3>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default PlacaVideoInput;
