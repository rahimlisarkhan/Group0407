import styles from './Basket.module.css';

export const BasketItem = ({ product }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemImageBox}>
        <img
          className={styles.itemImage}
          src={product.images[0]}
          alt={product.title}
        />
      </div>

      <div className={styles.itemInfo}>
        <span className={styles.itemTitle}>{product.title}</span>
        <span className={styles.itemBrand}>{product.brand}</span>
      </div>

      <span className={styles.itemPrice}>${product.price}</span>
    </div>
  );
};
