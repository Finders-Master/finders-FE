import React from 'react';

function Input({ inputId, type, label, placeholder }) {
  return (
    <>
      <label className="component-input" htmlFor={inputId}>
        <p>{label}</p>
        <input
          required
          name={label}
          placeholder={placeholder}
          className="component-input__input"
          id={inputId}
          type={type}
        />
      </label>
    </>
  );
}

export default Input;
