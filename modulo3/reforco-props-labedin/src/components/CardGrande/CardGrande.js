import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

const H4 = styled.h4`
  margin-bottom: 15px;
`;

function CardGrande(props) {
  return (
    <Div>
      <img
        src={props.imagem}
        style={{ width: 70, marginRight: 10, borderRadius: 50 }}
      />
      <Div2>
        <H4>{props.nome}</H4>
        <p>{props.descricao}</p>
      </Div2>
    </Div>
  );
}

export default CardGrande;
