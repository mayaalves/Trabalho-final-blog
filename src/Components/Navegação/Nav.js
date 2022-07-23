import React from "react";
import * as S from "./Style";

export default function Nav() {
  return (
    <>
      <S.Menu>
        <S.Ul>
          <S.Li>
            <S.A href="https://github.com/mayaalves" target="_blank">
              GitHub
            </S.A>
          </S.Li>
          <S.Li>
            <S.A
              href="https://codesandbox.io/dashboard/home?workspace=99c4fdb9-d678-45eb-9163-39b5d3e16f80"
              target="_blank"
            >
              Codesandbox
            </S.A>
          </S.Li>
          <S.Li>
            <S.A href="https://onupageclone.netlify.app/" target="_blank">
              ONU
            </S.A>
          </S.Li>
        </S.Ul>
      </S.Menu>
    </>
  );
}
