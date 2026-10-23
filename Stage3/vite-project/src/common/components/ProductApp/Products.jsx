import { productsData } from '../../../mock/productData';
import { ProductCard } from './ProductCard';
import styles from './Products.module.css';

export const Products = ({ basketData, onSelectProduct }) => {
  return (
    <div className={styles.container}>
      {productsData.map((product) => {
        const isHasBasket = basketData.find((item) => item.id == product.id);

        return (
          <ProductCard
            key={`product-id-${product.id}`}
            product={product}
            isHasBasket={isHasBasket}
            onClickProduct={() => onSelectProduct(product)}
          />
        );
      })}
    </div>
  );
};
