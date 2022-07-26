import React from "react";
// import "./CardPequeno.css";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 40vw;
`;

const Div2 = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  flex-direction: row;
  align-items: center;
  height: 70px;
  margin-block: 5px;
`;

function CardPequeno(props) {
  return (
    <div>
      <Div>
        <Div2>
          <img
            src={props.imagemEmail}
            style={{ width: 35, marginInline: 10 }}
          />
          <p>
            <strong>Email:</strong> {props.email}
          </p>
        </Div2>
        <Div2>
          <img
            src={props.imagemEndereco}
            style={{ width: 35, marginInline: 10 }}
          />
          <p>
            <strong>Endereço:</strong> {props.endereco}
          </p>
        </Div2>
      </Div>
    </div>
  );
}

export default CardPequeno;
