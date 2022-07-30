import React from "react";
import styled from "styled-components";

const MsgContainer = styled.div`
  width: 500px;
  margin-bottom: 5px;
`;

function Mensagens(props) {
  return (
    <MsgContainer>
      <p>
        <strong>{props.nomeUsuario}</strong>: {props.mensagemUsuario}
      </p>
    </MsgContainer>
  );
}

export default Mensagens;
