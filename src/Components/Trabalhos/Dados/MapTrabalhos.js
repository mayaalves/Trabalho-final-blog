import { DadosTrabalhos } from "./DadosTrabalhos";
import Trabalhos from "../Trabalhos";
import styled from "styled-components";

const Centralizar = styled.div`
  display: flex;
  justify-content: center;
`;
const BoxDialogo = styled.div`
  background-color: beige;
  width: 80%;
  height: 45vh;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const BoxH1 = styled.div`
  width: 52%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  font-size: 4vh;
  padding: 1vh;
  color: #8b658b;
  border-radius: 50px;
`;
const BoxP = styled.div`
  width: 54%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Sobre = styled.p`
  width: 60%;
  padding: 2vh;
  text-indent: 4vh;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.section`
  height: 300vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 637px) {
    height: 500vh;
    flex-direction: column;
  }
`;

const MapTrabalhos = () => {
  return (
    <>
      <Centralizar>
        <BoxDialogo>
          <BoxH1>
            <H1>Portfólio</H1>
          </BoxH1>
          <BoxP>
            <Sobre>
              Aqui estão imagens de paginas que construi ao longo do curso de
              front-end do vai na web. Nessa pequena galeria fica bem claro a
              minha evolução ao longo dos ultimos meses. Algumas resalvas devem
              ficar claras, nem todos os Trabalhos estão prontos, alguns ainda
              estão em construção, e como desenvolvedora, estão também em
              constante evolução.
            </Sobre>
          </BoxP>
        </BoxDialogo>
      </Centralizar>
      <Container>
        {DadosTrabalhos.map((item) => (
          <Trabalhos
            banner={item.banner}
            titulo={item.titulo}
            sobre={item.sobre}
          />
        ))}
      </Container>
    </>
  );
};
export default MapTrabalhos;
