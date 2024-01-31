import React from 'react'
import styles from './styles.module.css'
import {useNavigate} from 'react-router-dom'
const Index = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
navigate('/player'); 
  }
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={handleClick}
      className={styles.card}
    >
      <div className={styles.image}></div>
      <div>
        <p className={styles.name}>Fundamentals of Product Design</p>
        <p className={styles.details}>8 Chapters · 2 Hours</p>
      </div>
    </div>
  );
}

export default Index