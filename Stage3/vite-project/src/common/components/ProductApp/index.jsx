import { useState } from 'react';
import { Products } from './Products';
import { Basket } from './Basket';

export const ProductApp = () => {
  const [basket, setBasket] = useState([]);

  const handleBasket = (product) => {
    console.log(product);

    const isHasBasket = basket.find((item) => item.id == product.id);

    if (isHasBasket) {
      const newBasket = basket.filter((item) => item.id !== product.id);
      setBasket(newBasket);
    } else {
      const newBasket = [...basket, product];
      setBasket(newBasket);
    }

    // logic
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9">
          <Products basketData={basket} onSelectProduct={handleBasket} />
        </div>

        <div className="col-3">
          <Basket basketData={basket} />
        </div>
      </div>
    </div>
  );
};
