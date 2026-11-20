// import { useState } from 'react';
import styles from './BlogCard.module.css';
import { useHandleBoolean } from '../../../../shared/hooks/useHandleBoolean';
import { memo } from 'react';
// import { useMemo } from 'react';

export const BlogCard = memo(({ id, title, body, onReadMore }) => {
  const { show, handleOpen, handleClose, handleToggle } = useHandleBoolean();

  // const a = useMemo(() => {
  //   const result = 14 + id;

  //   return result;
  // }, []);

  console.log('BlogCard render olur...');

  // const [show, setShow] = useState(false);

  // const handleOpen = () => {
  //   setShow(true);
  // };

  // const handleClose = () => {
  //   setShow(false);
  // };

  // const handleToggle = () => {
  //   setShow((prev) => !prev);
  // };

  return (
    <article className={styles.card}>
      <span className={styles.badge}>#{id}</span>
      <h3 className={styles.title}>{title}</h3>

      {show && <p className={styles.body}>{body}</p>}

      <div className={styles.actions}>
        <button className={styles.button} onClick={onReadMore}>
          Read more
        </button>
        {/* <button className={styles.button} onClick={handleOpen} disabled={show}>
          Open
        </button>
        <button
          className={styles.button}
          onClick={handleClose}
          disabled={!show}>
          Close
        </button> */}
        <button className={styles.button} onClick={handleToggle}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
    </article>
  );
});
