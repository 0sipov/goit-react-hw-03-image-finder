import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, id, onSwitchModal }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={el => {
        onSwitchModal(el.target.id);
      }}
    >
      <img
        src={src}
        alt={alt}
        id={id}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};
export default ImageGalleryItem;
