import styles from './Button.module.css';

// variant: "primary" (bənövşəyi) və ya "outline" (çərçivəli)
export const Button = ({ children, onClick, variant = 'primary', type = 'button' }) => {
  return (
    <button type={type} className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
};
