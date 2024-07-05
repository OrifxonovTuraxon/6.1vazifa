
import React, { useState } from 'react';
import InputComponent from './components/input/InputComponent';
import ButtonComponent from './components/button/ButtonComponent';
import './styles.css';  

const DynamicPage = () => {
  const [inputs, setInputs] = useState([
    { id: 1, value: '', placeholder: 'Dynamic Input 1' },
    { id: 2, value: '', placeholder: 'Dynamic Input 2' },
    { id: 3, value: '', placeholder: 'Dynamic Input 3' }
  ]);

  const handleInputChange = (id, value) => {
    setInputs(prevInputs =>
      prevInputs.map(input =>
        input.id === id ? { ...input, value: value } : input
      )
    );
  };

  const handleButtonClick = () => {
    console.log('Clicked');
  };

  return (
    <div className="page-container dynamic-page">
      <h1 className="page-title">Dynamic Page</h1>
      <div className="input-grid">
        {inputs.map((input, index) => (
          <div key={input.id} className="input-container">
            <InputComponent
              value={input.value}
              onChange={(e) => handleInputChange(input.id, e.target.value)}
              placeholder={input.placeholder}
              styleClass={`input-style-${index + 4}`}
            />
            <ButtonComponent
              onClick={handleButtonClick}
              styleClass={`btn-style-${index + 4}`}
            >
              Submit
            </ButtonComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicPage;
