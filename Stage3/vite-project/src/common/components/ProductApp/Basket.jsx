import { BasketItem } from './BasketItem';
import styles from './Basket.module.css';

export const Basket = ({ basketData }) => {
  return (
    <div className={styles.basket}>
      <div className={styles.header}>
        <h2 className={styles.title}>Basket</h2>
        <span className={styles.count}>{basketData.length}</span>
      </div>

      {!basketData.length && <p className={styles.empty}>Basket is empty</p>}

      {basketData.map((item, index) => (
        <BasketItem key={`basket-id-${item.id}-${index}`} product={item} />
      ))}
    </div>
  );
};
