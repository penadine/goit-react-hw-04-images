import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from './Image.module.css';

function Spinner() {
  return (
    <div className={styles.loader}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Spinner;
