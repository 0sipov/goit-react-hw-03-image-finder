import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  render() {
    const { isOpen, onSwitchModal, src, alt } = this.props;
    return isOpen ? (
      <div
        className={styles.Overlay}
        onClick={e => {
          e.currentTarget === e.target && onSwitchModal();
        }}
      >
        <div className={styles.Modal}>
          <img src={src} alt={alt}></img>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
