import styled from "styled-components";

const Container = styled.section`
  margin-top: 5vh;
  background-color: beige;
  width: 34%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 637px) {
    width: 80%;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Imagem = styled.img`
  width: 86%;
  margin-bottom: 1vh;
  border: solid 3px #8b658b;
  @media (max-width: 637px) {
    width: 70%;
  }
`;
const Titulo = styled.h2`
  padding: 1vh;
  text-align: center;
  color: #8b658b;
`;
const P = styled.p`
  text-indent: 2vh;
  padding: 2vh;
  width: 50%;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const Trabalho = ({ banner, titulo, sobre }) => {
  return (
    <Container>
      <Imagem src={banner} alt="" />
      <Titulo>{titulo}</Titulo>
      <P>{sobre}</P>
    </Container>
  );
};

export default Trabalho;
