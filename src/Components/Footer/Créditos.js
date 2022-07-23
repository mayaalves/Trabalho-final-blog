import React from "react";
import * as S from "./Style";
import Instagram from "./Imgs/Instagram.png";
import Linkedin from "./Imgs/Linkedin.png";
import Github from "./Imgs/Github.png";

export default function Creditos() {
  return (
    <S.Container>
      <S.H2>
        Página de blog desenvolvidade por Mayara Alves para trabalho de
        conclusão do módulo 3 do curso de Front-end developer do @vainaWeb
      </S.H2>
      <nav>
        <S.A href="https://www.instagram.com/maylves/" target="_blank">
          <S.Img src={Instagram} alt="Instagram" />
        </S.A>
        <S.A
          href="https://www.linkedin.com/in/mayara-alves-felix/"
          target="_blank"
        >
          <S.Img src={Linkedin} alt="Linkedin" />
        </S.A>
        <S.A href="https://github.com/mayaalves" target="_blank">
          <S.Img src={Github} alt="Github" />
        </S.A>
      </nav>
    </S.Container>
  );
}
