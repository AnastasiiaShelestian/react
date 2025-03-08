function PostCard({ title, content, date }) {
  return (
    <div className="flex flex-col justify-between gap-2.5 w-[300px] mt-5 mb-[200px] border border-gray-300 pt-1.5 pl-2.5 no-underline">
      <h2 className="m-1 text-[1rem] font-fantasy text-left text-3xl">
        {title}
      </h2>
      <p className="text-left">{content}</p>
      <p className="text-sm text-gray-600 text-left">{date}</p>
      <a href="#" className="text-blue-500 no-underline">
        Read more ...
      </a>
    </div>
  );
}

export default PostCard;
