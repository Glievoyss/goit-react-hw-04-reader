/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Publication.module.css';

const Publication = ({ item, counter }) => {
  return (
    <article className={styles.publication}>
      <h2>
        {counter}.{item.title}
      </h2>
      <p>{item.text}</p>
    </article>
  );
};

export default Publication;
