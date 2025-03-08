function Footer() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ru-RU");
  return (
    <footer className="bg-blue-500 text-center text-white">
      <div>
        <p className="p-2.5 px-5">{formattedDate}</p>
      </div>
    </footer>
  );
}
export default Footer;
