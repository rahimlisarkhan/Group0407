import { useState } from 'react';
import styles from './ProductForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { classMerge } from '../../../helpers/classMerge';

const initialState = {
  category: '',
  title: '',
  price: '',
  brand: '',
  rating: '', // 0 - 5 float
  description: '',
  stock: false,
  images: [''],
};

export const ProductForm = ({ onAddData }) => {
  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  // const [price, setPrice] = useState('');

  const [form, setForm] = useState(initialState);

  const onCreateProduct = () => {
    console.log('form', form);

    const newData = {
      ...form,
      id: uuidv4(),
    };

    console.log('newData', newData);

    onAddData(newData);
    setForm(initialState);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name == 'images') {
      setForm({
        ...form,
        images: [value],
      });

      return;
    }

    if (name == 'stock') {
      setForm({
        ...form,
        stock: e.target.checked,
      });

      return;
    }

    const newForm = {
      ...form,
      [name]: value,
    };

    setForm(newForm);
  };

  return (
    <div className={styles.form}>
      {/* <h2>{title}</h2> */}
      <h2 className={styles.heading}>New product</h2>

      <div className={styles.row}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="product-category">
            Category
          </label>

          <input
            className={styles.input}
            name="category"
            placeholder="e.g. Phones"
            value={form.category}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="product-brand">
            Brand
          </label>

          <input
            className={styles.input}
            name="brand"
            placeholder="e.g. Apple"
            value={form.brand}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="product-title">
          Title
        </label>

        <input
          className={styles.input}
          name="title"
          placeholder="e.g. iPhone 15"
          value={form.title}
          onChange={handleChange}
        />

        {/* <span style={{ color: title.length > 100 ? 'red' : 'black' }}>
          {' '}
          {title.length}/100
        </span> */}
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="product-price">
            Price
          </label>

          <input
            className={styles.input}
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={form.price}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="product-rating">
            Rating
          </label>

          <input
            className={styles.input}
            name="rating"
            type="number"
            min="0"
            max="5"
            step="0.1"
            placeholder="0 - 5"
            value={form.rating}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="product-images">
          Image URL
        </label>

        <input
          className={styles.input}
          name="images"
          type="url"
          placeholder="https://example.com/image.png"
          value={form.images[0] ?? ''}
          onChange={handleChange}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="product-description">
          Description
        </label>

        <textarea
          className={classMerge(styles.input, styles.textarea)}
          name="description"
          rows="3"
          placeholder="Short product description"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <label className={styles.checkbox}>
        <input
          className={styles.checkboxInput}
          name="stock"
          type="checkbox"
          checked={form.stock}
          onChange={handleChange}
        />
        In stock
      </label>

      <button className={styles.submit} onClick={onCreateProduct}>
        Create
      </button>
    </div>
  );
};

// const form = {};

// // const name = 'price';
// const name = 'category';
// const value = 1000;

// // form.price = 1000;

// form[name] = value;
