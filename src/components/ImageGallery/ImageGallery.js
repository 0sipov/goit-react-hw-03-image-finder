import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGalery = ({ children }) => {
  return <ul className={styles.ImageGallery}>{children}</ul>;
};

export default ImageGalery;
