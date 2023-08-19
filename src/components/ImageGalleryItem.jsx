import React from 'react';
import styles from './Image.module.css';

function ImageGalleryItem({ image, onImageClick }) {
  return (
    <li className={styles.gallery_item}>
      <img
        src={image.webformatURL}
        alt=""
        onClick={() => onImageClick(image)}
      />
    </li>
  );
}

export default ImageGalleryItem;
