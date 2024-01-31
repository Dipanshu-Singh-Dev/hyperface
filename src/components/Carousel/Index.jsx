import React from 'react'
import styles from './styles.module.css'
import Card from "./Card/Index"
const Index = ({heading,description}) => {
  return (
    <div className="container">
      <div id={styles.head}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      <div id={styles.carousel}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Index