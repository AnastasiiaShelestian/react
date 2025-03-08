import styles from "./PostCard.module.scss";

function PostCard({ title, content, date }) {
  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>{title}</h2>
      <p className={styles.p1}>{content}</p>
      <p className={styles.p2}>{date}</p>
      <a href="#" className={styles.a}>
        Read more ...
      </a>
    </div>
  );
}

export default PostCard;
