import React from 'react';
import './Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="show-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;