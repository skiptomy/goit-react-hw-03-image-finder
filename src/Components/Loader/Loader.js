import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const reactLoader = () => (
  <div className={styles.loader}>
    <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
  </div>
);

export default reactLoader;
