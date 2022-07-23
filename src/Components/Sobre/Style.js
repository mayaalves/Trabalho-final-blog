import styled from "styled-components";

export const Container = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    height: 120vh;
    flex-direction: column;
  }
`;
export const BoxDialogo = styled.div`
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40vh;
  width: 40%;
  @media (max-width: 768px) {
    width: 80%;
    align-items: center;
  }
`;
export const H1 = styled.h1`
  font-size: 4vh;
  padding: 1vh;
  color: #8b658b;
`;
export const P = styled.p`
  width: 90%;
  padding: 1vh;
  text-indent: 4vh;
`;
export const BoxCarousel = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const Img = styled.img`
  width: 60%;
  height: 70%;
`;
