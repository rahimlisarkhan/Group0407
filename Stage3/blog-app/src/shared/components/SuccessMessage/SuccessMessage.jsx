import styles from './SuccessMessage.module.css';

export const SuccessMessage = ({ message }) => {
  if (!message) return null;

  return <p className={styles.success}>✓ {message}</p>;
};
