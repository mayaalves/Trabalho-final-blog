import React from "react";
import * as S from "./Style";
import Carousel from "react-elastic-carousel";
import Biscot from "./Img/Biscot.jpeg";
import BiscotZoe from "./Img/BiscotZoe.jpeg";
import Borboleta from "./Img/Borboleta.jpeg";
import CPV from "./Img/CPV.jpeg";
import Carnaval from "./Img/Carnaval.jpeg";
import Chanel from "./Img/Chanel.jpeg";
import DrBillaEu from "./Img/DrBillaEu.jpeg";
import EuLuCarolVivi from "./Img/EuLuCarolVivi.jpeg";
import IsaEuBilla from "./Img/IsaEuBilla.jpeg";
import IsaEuMari from "./Img/IsaEuMari.jpeg";
import Lirio from "./Img/Lirio.jpeg";
import Museu from "./Img/Museu.jpeg";
import OsEx from "./Img/OsEx.jpeg";
import Pipoca from "./Img/Pipoca.jpeg";
import Praia from "./Img/Praia.jpeg";
import RiR from "./Img/RiR.jpeg";
import RodaFortuna from "./Img/RodaFortuna.jpeg";
import Tombo from "./Img/Tombo.jpeg";
import Zibia from "./Img/Zibia.jpeg";
import ZoeCaca from "./Img/ZoeCaca.jpeg";
import ZoePipoca from "./Img/ZoePipoca.jpeg";

const Sobre = () => {
  return (
    <S.Container>
      <S.BoxDialogo>
        <S.H1>Sobre mim</S.H1>
        <S.P>
          Nascida e criada na Maré, sempre me considerei uma pessoas curiosa e
          versátil. Tais caracteristicas me levaram pra várias direções em
          muitos momentos diferentes. Sempre gostei de me dedicar a vive-lós com
          amor e intensidade. Recentemente decidi mudar totalmente o rumo da
          minha vida e me dedicar a algo que eu nunca tinha se quer tentado.
          Assim, aqui estou eu agora, falando sobre mim, em um página em react
          totalmente criada por mim. Explore a página e seja bem-vindo.
        </S.P>
      </S.BoxDialogo>
      <S.BoxCarousel>
        <Carousel enableAutoPlay={true} transitionMs={300} enableTilt={true}>
          <S.Img src={Biscot} alt="" />
          <S.Img src={BiscotZoe} alt="" />
          <S.Img src={Chanel} alt="" />
          <S.Img src={Pipoca} alt="" />
          <S.Img src={Zibia} alt="" />
          <S.Img src={ZoeCaca} alt="" />
          <S.Img src={ZoePipoca} alt="" />
          <S.Img src={Borboleta} alt="" />
          <S.Img src={Lirio} alt="" />
          <S.Img src={RodaFortuna} alt="" />
          <S.Img src={CPV} alt="" />
          <S.Img src={Carnaval} alt="" />
          <S.Img src={DrBillaEu} alt="" />
          <S.Img src={EuLuCarolVivi} alt="" />
          <S.Img src={IsaEuBilla} alt="" />
          <S.Img src={IsaEuMari} alt="" />
          <S.Img src={Museu} alt="" />
          <S.Img src={OsEx} alt="" />
          <S.Img src={Praia} alt="" />
          <S.Img src={RiR} alt="" />
          <S.Img src={Tombo} alt="" />
        </Carousel>
      </S.BoxCarousel>
    </S.Container>
  );
};
export default Sobre;
