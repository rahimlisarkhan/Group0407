import { useState } from 'react';
import { Products } from './Products';
import { Basket } from './Basket';
import { ProductForm } from './ProductForm';
import { productsData as products } from '../../../mock/productData';

export const ProductApp = () => {
  const [basket, setBasket] = useState([]);
  const [productsData, setProductsData] = useState(products);

  const onSelectProduct = (product) => {
    console.log(product);

    const isHasBasket = basket.find((item) => item.id == product.id);

    if (isHasBasket) {
      const newBasket = basket.filter((item) => item.id !== product.id);
      setBasket(newBasket);
    } else {
      const newBasketItem = {
        ...product,
        quantity: 1,
      };

      const newBasket = [...basket, newBasketItem];
      setBasket(newBasket);
    }

    // logic
  };

  const onIncrementProduct = (basketProduct) => {
    const quantity = basketProduct?.quantity ?? 1;

    const newData = basket.map((item) => {
      if (item.id == basketProduct.id) {
        const newItem = {
          ...basketProduct,
          quantity: quantity + 1,
        };

        return newItem;
      }

      return item;
    });

    setBasket(newData);
  };

  const onDecrementProduct = (basketProduct) => {
    const quantity = basketProduct?.quantity ?? 1;

    const newData = basket.map((item) => {
      if (item.id == basketProduct.id) {
        const newItem = {
          ...basketProduct,
          quantity: quantity <= 1 ? 1 : quantity - 1,
        };

        return newItem;
      }

      return item;
    });

    setBasket(newData);
    // logic
  };

  const onAddData = (newData) => {
    setProductsData((prevData) => [newData, ...prevData]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9">
          <ProductForm onAddData={onAddData} />
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <Products
            productsData={productsData}
            basketData={basket}
            onSelectProduct={onSelectProduct}
          />
        </div>

        <div className="col-3">
          <Basket
            basketData={basket}
            onIncrementProduct={onIncrementProduct}
            onDecrementProduct={onDecrementProduct}
          />
        </div>
      </div>
    </div>
  );
};
