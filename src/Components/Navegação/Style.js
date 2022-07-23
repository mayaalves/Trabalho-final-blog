import styled from "styled-components";

export const Menu = styled.nav`
  background-color: beige;
`;
export const Ul = styled.ul`
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
`;
export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s;
  &:hover {
    color: #8b658b;
    transform: scale(1.2);
  }
`;
export const A = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: #8b658b;
    font-weight: bold;
  }
`;
