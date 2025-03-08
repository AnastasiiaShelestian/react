import "./footer.css";

function Footer() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ru-RU");
  return (
    <footer className="footer">
      <div>
        <p className="p">{formattedDate}</p>
      </div>
    </footer>
  );
}
export default Footer;
