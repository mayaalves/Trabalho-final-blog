import styled from "styled-components";
import Virgo from "../Img/VirgoStars.png";

export const Container = styled.section`
  background-color: beige;
  background-image: url(${Virgo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  height: 50vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 624px) {
    height: 75vh;
    flex-direction: column;
  }
`;
export const Img = styled.img`
  width: 40vh;
  height: 43vh;
  border-radius: 200px;
  border: double;
`;
export const BoxMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H1 = styled.h1`
  margin-bottom: 4vh;
  background-color: #8b658b;
  padding: 1.5vh;
  border-radius: 50px;
  transition: all 0.8s;
  &:hover {
    color: #ffffff;
  }
`;
export const Button = styled.button`
  margin-top: 4vh;
  padding: 2vh;
  background-color: transparent;
  border: solid 2px #8b658b;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.8s;
  &:hover {
    transform: scale(1.1);
    color: #8b658b;
    text-shadow: 0 3px 0 #ffffff;
    font-weight: bold;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

//Style Modal

export const Modal = styled.section`
  height: 70vh;
  width: 90vh;
  position: absolute;
  left: 65vh;
  top: 14vh;
  z-index: 9;
  backdrop-filter: blur(15px) saturate(157%);
  -webkit-backdrop-filter: blur(15px) saturate(157%);
  background-color: rgba(216, 212, 216, 0.06);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  @media (max-width: 1440px) {
    width: 90vh;
    height: 70vh;
    left: 26vh;
    top: 18vh;
  }
  @media (max-width: 1024px) {
    left: 12vh;
  }
`;
export const Ul = styled.ul`
  width: 90vh;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Li = styled.li`
  list-style: none;
  width: 70vh;
  margin: 1vh;
`;
