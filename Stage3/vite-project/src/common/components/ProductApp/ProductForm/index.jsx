import { useState } from 'react';
import styles from './ProductForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { classMerge } from '../../../helpers/classMerge';

import { useFormik } from 'formik';
import { isURL } from '../../../helpers/regex';

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

  // const [form, setForm] = useState(initialState);

  const formik = useFormik({
    initialValues: initialState,
    validate: (values) => {
      const err = {};

      if (!values.category.trim()) {
        err.category = 'Category is required';
      }

      if (!values.brand.trim()) {
        err.brand = 'Brand is required';
      }

      if (!values.title.trim()) {
        err.title = 'Title is required';
      } else if (values.title.length < 3) {
        err.title = 'Title must be at least 3 characters';
      } else if (values.title.length > 100) {
        err.title = 'Title must be at most 100 characters';
      }

      if (values.price === '') {
        err.price = 'Price is required';
      } else if (Number(values.price) <= 0) {
        err.price = 'Price must be greater than 0';
      }

      if (values.rating === '') {
        err.rating = 'Rating is required';
      } else if (Number(values.rating) < 0 || Number(values.rating) > 5) {
        err.rating = 'Rating must be between 0 and 5';
      }

      if (!values.images[0]) {
        err.images = 'Image URL is required';
      } else if (!isURL(values.images[0])) {
        err.images = 'Enter a valid image URL (https://...)';
      }

      if (!values.description.trim()) {
        err.description = 'Description is required';
      } else if (values.description.length < 10) {
        err.description = 'Description must be at least 10 characters';
      }

      return err;
    },

    onSubmit: (values, options) => {
      const newData = {
        ...values,
        id: uuidv4(),
      };

      console.log('newData', newData);

      onAddData(newData);

      options.resetForm();
    },
  });

  window.addEventListener('offline', function () {
    console.log('Offline oldu');
    // setShow(true)
  });

  window.addEventListener('online', function () {
    console.log('Online oldu');
    // setShow(false);
  });

  // window.scrollTo({
  //   behavior:"smooth"
  // })
  // const onCreateProduct = () => {
  //   console.log('form', form);

  //   const newData = {
  //     ...form,
  //     id: uuidv4(),
  //   };

  //   console.log('newData', newData);

  //   onAddData(newData);
  //   setForm(initialState);
  // };

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   if (name == 'images') {
  //     setForm({
  //       ...form,
  //       images: [value],
  //     });

  //     return;
  //   }

  //   if (name == 'stock') {
  //     setForm({
  //       ...form,
  //       stock: e.target.checked,
  //     });

  //     return;
  //   }

  //   const newForm = {
  //     ...form,
  //     [name]: value,
  //   };

  //   setForm(newForm);
  // };

  return (
    <div
      className={styles.form}
      // onScroll={(e)=>{

      // }}
      onMouseLeave={() => {
        console.log('mouse leave');
        // setShow(false)
      }}
      onMouseEnter={() => {
        console.log('mouse enter');
        // setShow(true);
      }}>
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
            // value={form.category}
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.category && formik.errors.category && (
            <span className={styles.error}>{formik.errors.category}</span>
          )}
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="product-brand">
            Brand
          </label>

          <input
            className={styles.input}
            name="brand"
            placeholder="e.g. Apple"
            // value={form.brand}
            value={formik.values.brand}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.brand && formik.errors.brand && (
            <span className={styles.error}>{formik.errors.brand}</span>
          )}
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
          // value={form.title}
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.title && formik.errors.title && (
          <span className={styles.error}>{formik.errors.title}</span>
        )}

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
            // value={form.price}
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.price && formik.errors.price && (
            <span className={styles.error}>{formik.errors.price}</span>
          )}
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
            // value={form.rating}
            value={formik.values.rating}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.rating && formik.errors.rating && (
            <span className={styles.error}>{formik.errors.rating}</span>
          )}
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
          value={formik.values.images[0]}
          onChange={(e) => formik.setFieldValue('images', [e.target.value])}
          onBlur={formik.handleBlur}
        />

        {formik.touched.images && formik.errors.images && (
          <span className={styles.error}>{formik.errors.images}</span>
        )}
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
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.description && formik.errors.description && (
          <span className={styles.error}>{formik.errors.description}</span>
        )}
      </div>

      <label className={styles.checkbox}>
        <input
          className={styles.checkboxInput}
          name="stock"
          type="checkbox"
          checked={formik.values.stock}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        In stock
      </label>

      <button className={styles.submit} onClick={formik.handleSubmit}>
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

// const renderElement = (el, index, list) => {
//   return el * 2;
// };

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((el, index, list) => {
  return el * 2;
});

console.log(newArr); // [2, 4, 6, 8, 10]
