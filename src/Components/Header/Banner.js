import React, { useState } from "react";
import * as S from "./Styles";
import Perfil from "../Img/FotoPerfil.jpeg";

export default function Banner() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  const Sobre = () => {
    return (
      <S.Modal>
        <S.Ul>
          <S.Li>
            Minha mãe queria me dar o nome de Morgana por causa do livro "As
            Brumas de Avalon".
          </S.Li>
          <S.Li>Tenho 30 anos e sou do signo de virgem.</S.Li>
          <S.Li>
            Eu e meu irmão fazemos aniversario no mesmo dia do mês, eu 11/09,
            ele 11/12.
          </S.Li>
          <S.Li>Somos uma familia multi-racial.</S.Li>
          <S.Li>
            Aprendi inglês e espanhol quase sozinha e sempre tive facilidade com
            idiomas e linguagens.
          </S.Li>
          <S.Li>Sou muito comunicativa e gosto de ajudar as pessoas.</S.Li>
          <S.Li>Amo estrelas, lua e formatos espaciais no geral.</S.Li>
          <S.Li>
            Me considero uma pessoa criativa e artistica, tenho 14 tatuagens,
            canto e já tive banda.
          </S.Li>
          <S.Li>Sou fã de Harry Potter.</S.Li>
        </S.Ul>
      </S.Modal>
    );
  };
  return (
    <S.Container>
      <S.Img src={Perfil} alt="Mulher de cabelo cacheado num fundo vermelho" />
      <S.BoxMe>
        <S.H1>Olá, eu sou Mayara</S.H1>
        <S.Button
          onClick={() => {
            handleModal();
          }}
        >
          {modal ? "Fechar" : "Curiosidades sobre mim"}
        </S.Button>
        {modal && Sobre()}
      </S.BoxMe>
    </S.Container>
  );
}
