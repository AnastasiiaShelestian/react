function PostCard({ title, content, date }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10px",
        textDecoration: "none",
        width: "300px",
        marginTop: "20px",
        marginBottom: "200px",
        border: "1px solid #ccc",
        paddingTop: "5px",
        paddingLeft: "10px",
      }}
    >
      <h2
        style={{
          margin: "5px",
          fontSize: "1 rem",
          fontFamily: "fantasy",
          textAlign: "left",
        }}
      >
        {title}
      </h2>
      <p style={{ textAlign: "left" }}>{content}</p>
      <p style={{ fontSize: "0.8rem", color: "#666", textAlign: "left" }}>
        {date}
      </p>
      <a href="#" style={{ color: "blue", textDecoration: "none" }}>
        Read more ...
      </a>
    </div>
  );
}

export default PostCard;
