import styles from './Button.module.css';

export default function Button(props) {
  const { color = 'blue', text = 'Text', disable } = props;

  const inlineStyle = { backgroundColor: color };

  return (
    <button className={styles.btn} style={inlineStyle} disabled={disable}>
      {text}
    </button>
  );
}
