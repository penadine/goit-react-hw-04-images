import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';

function LoadButton({ onLoadMore }) {
  return (
    <button className={styles.loadmore} onClick={onLoadMore}>
      Load more
    </button>
  );
}

LoadButton.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
};

export default LoadButton;
