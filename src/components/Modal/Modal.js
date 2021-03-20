import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  render() {
    const { isOpen, onSwitchModal, children } = this.props;
    return isOpen ? (
      <div
        className={styles.Overlay}
        onClick={e => {
          e.currentTarget === e.target && onSwitchModal();
        }}
      >
        <div className={styles.Modal}>{children}</div>
      </div>
    ) : null;
  }
}

export default Modal;
