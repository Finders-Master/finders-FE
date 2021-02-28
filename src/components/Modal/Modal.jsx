/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { GrClose } from 'react-icons/gr';

const Modal = ({
  children, position = null, modal, handleModal,
}) => (
  <>
    <div
      className={`modal ${modal ? 'modal__active' : 'modal__inactive'} 
    shadow 
    animate__animated 
    animate__fadeInDown
    animate__faster
    ${position}`}
    >
      {children}
    <button
      className='modal__close'
      onClick={() => { handleModal(); }}
    >
      <GrClose />
    </button>
    </div>
  </>
);
export default Modal;
