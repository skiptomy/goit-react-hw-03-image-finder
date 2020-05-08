/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onCloseLargeImage: propTypes.func.isRequired,
    url: propTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.closeImageByClickEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.closeImageByClickEsc);
  }

  closeImageByClickEsc = e => {
    e.keyCode === 27 && this.props.onCloseLargeImage();
  };

  closeImageOnOverlay = e => {
    e.target === e.currentTarget && this.props.onCloseLargeImage();
  };

  render() {
    const { url } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.closeImageOnOverlay}>
        <div className={styles.Modal}>
          <img src={url} alt="" />
        </div>
      </div>
    );
  }
}
