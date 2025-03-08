function Header() {
  return (
    <header
      style={{
        display: "flex",
        background: "blue",
        justifyContent: "space-between",
      }}
    >
      <h1
        style={{
          color: "white",
          padding: "10px 20px",
        }}
      >
        Blog-App
      </h1>
      <h3
        style={{
          color: "white",
          padding: "20px 20px",
        }}
      >
        Welcome!
      </h3>
    </header>
  );
}

export default Header;
