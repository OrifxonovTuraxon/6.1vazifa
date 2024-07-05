
import React from 'react';
import '../../styles.css';  

const InputComponent = ({ value, onChange, placeholder, styleClass }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${styleClass}`}
    />
  );
};

export default InputComponent;
