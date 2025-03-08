function Footer() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ru-RU");
  return (
    <footer
      style={{
        background: "blue",
        textAlign: "center",
        color: "white",
      }}
    >
      <div>
        <p
          style={{
            padding: "10px 20px",
          }}
        >
          {formattedDate}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
