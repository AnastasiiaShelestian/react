import styles from "./Footer.module.scss";

function Footer() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ru-RU");
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.p}>{formattedDate}</p>
      </div>
    </footer>
  );
}
export default Footer;
