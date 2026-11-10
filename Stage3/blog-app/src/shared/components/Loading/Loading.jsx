import styles from './Loading.module.css';

export const Loading = ({ loading, text = 'Yüklənir...' }) => {
  if (!loading) return null;

  return (
    <div className={styles.wrapper}>
      <span className={styles.spinner} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};
