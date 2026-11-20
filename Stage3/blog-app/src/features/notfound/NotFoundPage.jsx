import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Axtardığınız səhifə tapılmadı.</p>
      <Link to="/" className={styles.link}>
        Ana səhifəyə qayıt
      </Link>
    </div>
  );
};
