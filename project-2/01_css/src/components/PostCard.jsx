import "./footer.css";
function PostCard({ title, content, date }) {
  return (
    <div className="div">
      <h2 className="h2">{title}</h2>
      <p className="p1">{content}</p>
      <p className="p2">{date}</p>
      <a href="#" className="a">
        Read more ...
      </a>
    </div>
  );
}

export default PostCard;
