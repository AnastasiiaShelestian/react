import "./_footer.scss";

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
