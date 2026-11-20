import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  // useNavigate — kod daxilindən səhifəyə keçid etmək üçün funksiya qaytarır
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <span className={styles.logo} onClick={() => navigate('/')}>
        BlogApp
      </span>

      <nav className={styles.nav}>
        <button className={styles.button} onClick={() => navigate('/')}>
          Home
        </button>
        <button className={styles.button} onClick={() => navigate('/meqale')}>
          Bloglar
        </button>
        <button className={styles.button} onClick={() => navigate('/setting')}>
          Settings
        </button>
        <button className={styles.button} onClick={() => navigate(-1)}>
          ← Geri
        </button>
      </nav>
    </header>
  );
};
