import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
`;

function ImagemButton(props) {
  return (
    <Div>
      <img
        src={props.imagem}
        style={{ width: 30, marginRight: 10, borderRadius: 50 }}
      />
      <p>{props.texto}</p>
    </Div>
  );
}

export default ImagemButton;
