import Article from "./Article";

function AricleList() {
  const articleArray = [
    {
      title: "git init",
      text: "Инициализирует новый локальный репозиторий в текущей папке.",
    },
    {
      title: "git add",
      text: "Добавляет файлы в область подготовки для коммита (staging area).",
    },
    {
      title: "git commit",
      text: "Фиксирует изменения с сообщением о коммите",
    },
    {
      title: "git push",
      text: "Отправляет локальные изменения на удаленный репозиторий.",
    },
  ];

  return (
    <div>
      {articleArray.map(function (article, index) {
        return (
          <Article key={index} title={article.title} text={article.text} />
        );
      })}
    </div>
  );
}
export default AricleList;
