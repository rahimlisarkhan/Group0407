import styles from './TextInput.module.css';
import PropTypes from 'prop-types';

export default function TextInput(props) {
  const {
    label,
    type = 'text',
    placeholder = '',
    value,
    onChange,
    disable,
    className = '',
  } = props;

  return (
    <label className={styles.field}>
      {label && <span className={styles.label}>{label}</span>}

      <input
        className={`${styles.input} ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disable}
      />
    </label>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disable: PropTypes.bool,
  className: PropTypes.string,
};
