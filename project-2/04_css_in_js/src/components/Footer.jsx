import styled from "styled-components";

const Wrapper = styled.footer`
  background: blue;
  text-align: center;
  color: white;
`;

const FooterTitle = styled.div`
  padding: 10px 20px;
`;

const PTitle = styled.p`
  padding: 10px 20px;
`;

function Footer() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ru-RU");
  return (
    <Wrapper>
      <FooterTitle>
        <PTitle>{formattedDate}</PTitle>
      </FooterTitle>
    </Wrapper>
  );
}
export default Footer;
