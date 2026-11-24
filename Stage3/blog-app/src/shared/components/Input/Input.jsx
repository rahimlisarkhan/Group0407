import { cls } from '../../utils/cls';
import styles from './Input.module.css';

// label, error və input-un bütün digər prop-ları (name, value, onChange...) qəbul edir
export const Input = ({ label, error, type = 'text', ...props }) => {
  return (
    <label className={styles.field}>
      {label && <span className={styles.label}>{label}</span>}

      <input type={type} className={cls(styles.input, error && styles.invalid)} {...props} />

      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
};
