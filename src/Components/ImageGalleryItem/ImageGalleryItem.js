/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import propTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, onOpenImage }) => (
  <img src={url} alt="" className={styles.ImageGalleryItemImage} onClick={onOpenImage} />
);

ImageGalleryItem.propTypes = {
  url: propTypes.string.isRequired,
  onOpenImage: propTypes.func.isRequired,
};

export default ImageGalleryItem;
