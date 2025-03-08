import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Blog-App</h1>
      <h3 className={styles.h3}>Welcome!</h3>
    </header>
  );
}

export default Header;
