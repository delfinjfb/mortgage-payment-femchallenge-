import React, { useState, useRef } from 'react';
import './number.scss';

const Number = ({
  inputName,
  min,
  max,
  textInput,
  textImputRight = true,
  value,
  onChange,
  error,
  isDecimalAllowed = false,
}) => {
  const [isActive, setIsActive] = useState(false);
  const previousValue = useRef(value);

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  const handleChange = (event) => {
    const newValue = event.target.value;

    // Allow only numbers, "." (for decimal), and "-" for negative numbers
    const allowedChars = /^[-\d.]+$/;
    if (!allowedChars.test(newValue)) {
      return; // Ignore invalid characters
    }

    // Restrict decimal input to 2 digits (if isDecimalAllowed)
    if (isDecimalAllowed) {
      const decimalIndex = newValue.indexOf('.');
      if (decimalIndex !== -1 && newValue.length - decimalIndex > 3) {
        event.target.value = previousValue.current; // Revert to previous value
        return;
      }
      previousValue.current = newValue; // Update previous value for reference
    }

    onChange(event); // Call the provided onChange handler
  };

  return (
    <div
      className={`input-group ${error ? 'invalid' : 'valid'} ${
        isActive ? 'active' : ''
      }`}
    >
      {textImputRight ? (
        <span className="input-group-text">{textInput}</span>
      ) : null}
      <input
        id={inputName}
        name={inputName}
        type="number"
        min={min}
        max={max}
        step={isDecimalAllowed ? '0.01' : '1'}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {!textImputRight && <span className="input-group-text">{textInput}</span>}

      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Number;
