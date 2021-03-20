import React from 'react';
import styles from './Button.module.css';

const Button = ({ onAddQuery }) => {
  return (
    <button type="button" className={styles.Button} onClick={onAddQuery}>
      Load more
    </button>
  );
};

export default Button;
