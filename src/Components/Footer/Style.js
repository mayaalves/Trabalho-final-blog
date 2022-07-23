import styled from "styled-components";

export const Container = styled.section`
  background-color: beige;
  height: 14vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const H2 = styled.h2`
  width: 40%;
  font-size: 1.7vh;
  @media (max-width: 505px) {
    display: none;
  }
`;
export const A = styled.a``;
export const Img = styled.img`
  width: 8vh;
`;
