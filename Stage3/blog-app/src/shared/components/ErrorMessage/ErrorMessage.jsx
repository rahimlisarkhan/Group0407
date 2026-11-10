import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return <p className={styles.error}>{message}</p>;
};
