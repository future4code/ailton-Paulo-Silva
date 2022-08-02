import React, { Component } from "react";

export default class Etapa3 extends Component {
  render() {
    return (
      <div>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <p>7. Porque você não terminou o curso de graduação?</p>

        <input type="text" placeholder="Insira sua resposta"></input>

        <p>8. Você fez algum curso complementar? </p>

        <select name="select">
          <option>Não fiz nem curso complementar </option>
          <option>Curso técnico </option>
          <option>Cursos de inglês </option>
        </select>
      </div>
    );
  }
}
