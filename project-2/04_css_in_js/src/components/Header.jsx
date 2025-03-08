import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  background: blue;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  color: white;
  padding: 10px 20px;
`;
const HeaderTitle1 = styled.h3`
  color: white;
  padding: 20px 20px;
`;

function Header() {
  return (
    <Wrapper>
      <HeaderTitle> Blog-App </HeaderTitle>
      <HeaderTitle1>Welcome!</HeaderTitle1>
    </Wrapper>
  );
}

export default Header;
