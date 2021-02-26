import React from 'react';

function Input({
  inputId,
  type,
  label,
  placeholder,
  disabled = false,
  initialValue,
}) {
  return (
    <>
      <label className="component-input" htmlFor={inputId}>
        <p>{label}</p>
        <input
          value={initialValue}
          disabled={disabled}
          required
          name={label}
          placeholder={placeholder}
          className={('component-input__input', disabled && 'disbaled-input')}
          id={inputId}
          type={type}
        />
      </label>
    </>
  );
}

export default Input;
