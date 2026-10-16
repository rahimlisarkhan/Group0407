import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    color = 'blue',
    text = 'Text',
    disable,
    children,
    className = '',
  } = props;

  const inlineStyle = { backgroundColor: color };

  return (
    <button
      className={`${styles.btn} ${className}`}
      style={inlineStyle}
      disabled={disable}>
      {children || text}
    </button>
  );
}

Button.propTypes = {
  // color: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'red']),
  // color: PropTypes.string.isRequired,
  // color: PropTypes.string.isRequired,
  text: PropTypes.string,
  disable: PropTypes.bool,
  // children: PropTypes.node,
};
