import { cls } from '../../utils/cls';
import styles from './Textarea.module.css';

export const Textarea = ({ label, error, rows = 5, ...props }) => {
  return (
    <label className={styles.field}>
      {label && <span className={styles.label}>{label}</span>}

      <textarea rows={rows} className={cls(styles.textarea, error && styles.invalid)} {...props} />

      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
};
