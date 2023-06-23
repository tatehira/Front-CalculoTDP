import React from 'react';

const Field = ({ imagePath, children }) => {
  return (
    <div className="field">
      <img src={imagePath} alt="Component" />
      {children}
    </div>
  );
};

export default Field;
