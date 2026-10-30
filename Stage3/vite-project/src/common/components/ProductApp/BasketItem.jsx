import styles from './Basket.module.css';

export const BasketItem = ({
  product,
  onIncrementProduct,
  onDecrementProduct,
}) => {
  const quantity = product?.quantity ?? 1;

  const stockCount = 7;

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

      <div className={styles.itemFooter}>
        <div className={styles.stepper}>
          <button
            className={styles.stepperButton}
            aria-label="Decrease quantity"
            onClick={() => onDecrementProduct(product)}
            disabled={quantity == 1}>
            −
          </button>

          <span className={styles.stepperValue}>{quantity}</span>

          <button
            className={styles.stepperButton}
            aria-label="Increase quantity"
            onClick={() => onIncrementProduct(product)}
            disabled={quantity >= stockCount}>
            +
          </button>
        </div>

        <span className={styles.itemPrice}>
          $ {product.price * product.quantity}
        </span>
      </div>
    </div>
  );
};
