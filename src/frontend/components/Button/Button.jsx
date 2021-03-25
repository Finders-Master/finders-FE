/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ style, link, text, fontSize = '1' }) => (
  <Link to={link}>
    <button 
    className={`${style}`}
    style={{fontSize:`${fontSize}rem`}}
    >
      {text}
    </button>
  </Link>

);
export default Button;
