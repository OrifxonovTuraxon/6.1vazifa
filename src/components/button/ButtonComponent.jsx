
import React from 'react';
import '../../styles.css';  

const ButtonComponent = ({ onClick, children, styleClass }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${styleClass}`}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
