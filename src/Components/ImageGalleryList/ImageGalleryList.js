import React from 'react';
import propTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGalleryList.module.css';

const ImageGalleryList = ({ images, openImage }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <li className={styles.ImageGalleryItem} key={id}>
        <ImageGalleryItem key={id} url={webformatURL} onOpenImage={() => openImage(largeImageURL)} />
      </li>
    ))}
  </ul>
);

ImageGalleryList.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      webformatURL: propTypes.string.isRequired,
      largeImageURL: propTypes.string.isRequired,
    }),
  ).isRequired,
  openImage: propTypes.func.isRequired,
};

export default ImageGalleryList;
