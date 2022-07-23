import React from "react";
import Banner from "./Components/Header/Banner";
import Nav from "./Components/Navegação/Nav";
import { createGlobalStyle } from "styled-components";
import Background from "./Components/Img/Background.png";
import Trabalho from "./Components/Trabalhos/Dados/MapTrabalhos";
import Creditos from "./Components/Footer/Créditos";
import Sobre from "./Components/Sobre/Sobre";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body{
  background-color: beige;
  background-image: url(${Background});
  background-size: contain;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Nav />
      <Sobre />
      <Trabalho />
      <Creditos />
    </>
  );
}
