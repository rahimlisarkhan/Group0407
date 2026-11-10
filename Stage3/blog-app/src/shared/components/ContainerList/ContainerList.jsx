import styles from './ContainerList.module.css';

export const ContainerList = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};
