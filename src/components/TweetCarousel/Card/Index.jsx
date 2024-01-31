import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
  navigate('/player'); 
  }
  return (
    <div onClick={handleClick} className={styles.card}>
      <div className={styles.image}>
        <img src="profile.png" alt="profile" />
      </div>
      <div>
        <p id={styles.badge}>Product</p>
        <p className={styles.name}>Fundamentals of Product Design</p>
        <p className={styles.details}>Shreyas Doshi</p>
      </div>
    </div>
  );
}

export default Index