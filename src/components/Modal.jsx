import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';

function Modal({ imageUrl, onClose }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <img src={imageUrl} alt="Enlarged pic" />
      </div>
    </div>
  );
}

Modal.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
