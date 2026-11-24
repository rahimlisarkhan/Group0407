import { SettingBar } from '../SettingBar';
import styles from './SettingLayout.module.css';

// Solda SettingBar, sağda nested route-ların səhifəsi (children)
export const SettingLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <SettingBar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
