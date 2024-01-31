import React from 'react'
import styles from './styles.module.css'
import AudioPlayer from './Player/Index';
const Index = () => {
  return (
    <div id={styles.player}>
      <img src="audiobook.png" alt="audiobook" />
      <p id={styles.title}>Fundamentals of Product Des..</p>
      <p id={styles.details}>Chapter 2 - What is Product Design?</p>
      <div id={styles.buttons}>
        <button>View Chapter Notes</button>
        <button>Attempt Quiz</button>
      </div>
      <AudioPlayer/>
    </div>
  );
}

export default Index;