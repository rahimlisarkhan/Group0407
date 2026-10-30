import { ProductCard } from './ProductCard';
import styles from './Products.module.css';

export const Products = ({ basketData, productsData, onSelectProduct }) => {
  return (
    <div className={styles.container}>
      {productsData.map((product) => {
        const isHasBasket = basketData.find((item) => item.id == product.id);

        return (
          <ProductCard
            key={`product-id-${product.id}`}
            product={product}
            isHasBasket={isHasBasket}
            onSelectProduct={onSelectProduct}
          />
        );
      })}
    </div>
  );
};
