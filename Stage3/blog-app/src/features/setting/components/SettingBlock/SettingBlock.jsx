import styles from './SettingBlock.module.css';

// Setting alt səhifələrinin oturduğu ağ blok
export const SettingBlock = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
