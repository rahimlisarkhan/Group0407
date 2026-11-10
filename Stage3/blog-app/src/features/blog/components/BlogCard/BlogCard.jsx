import styles from './BlogCard.module.css';

export const BlogCard = ({ id, title, body }) => {
  return (
    <article className={styles.card}>
      <span className={styles.badge}>#{id}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </article>
  );
};
