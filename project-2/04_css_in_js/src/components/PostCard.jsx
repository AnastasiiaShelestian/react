import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  text-decoration: none;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 200px;
  border: 1px solid #ccc;
  padding-top: 5px;
  padding-left: 10px;
`;

const H2Title = styled.h2`
  margin: 5px;
  font-size: 1 rem;
  font-family: fantasy;
  text-align: left;
`;

const P1Title = styled.p`
  texta-lign: left;
`;

const P2Title = styled.p`
  font-size: 0.8rem;
  color: #666;
  text-align: left;
`;

const A_Title = styled.a`
  color: blue;
  text-decoration: none;
`;

function PostCard({ title, content, date }) {
  return (
    <Wrapper>
      <H2Title>{title}</H2Title>
      <P1Title>{content}</P1Title>
      <P2Title>{date}</P2Title>
      <A_Title href="#">Read more ...</A_Title>
    </Wrapper>
  );
}

export default PostCard;
