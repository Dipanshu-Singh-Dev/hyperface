import React from 'react'
import styles from './styles.module.css'
const Index = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div>
        <p className={styles.name}>Fundamentals of Product Design</p>
        <p className={styles.details}>8 Chapters · 2 Hours</p>
      </div>
    </div>
  );
}

export default Index