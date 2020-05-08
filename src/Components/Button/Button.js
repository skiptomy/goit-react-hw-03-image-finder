import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onFetchImages }) => (
  <button className={styles.Button} type="button" onClick={onFetchImages}>
    Load more
  </button>
);

Button.propTypes = {
  onFetchImages: propTypes.func.isRequired,
};

export default Button;
