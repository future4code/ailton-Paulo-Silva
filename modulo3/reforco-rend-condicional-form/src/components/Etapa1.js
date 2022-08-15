import React, { Component } from "react";

export default class Etapa1 extends Component {
  render() {
    return (
      <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>

        <p>1. Qual o seu nome?</p>

        <input type="text" placeholder="Digite seu nome"></input>

        <p>2. Qual sua idade?</p>

        <input type="text" placeholder="Digite sua idade"></input>

        <p>3. Qual seu email?</p>

        <input type="text" placeholder="digite seu email"></input>

        <p>4. Qual a sua escolaridade?</p>

        <select name="select">
          <option>Ensino Médio incompleto</option>
          <option>Ensino Médio completo</option>
          <option>Ensino Superior incompleto</option>
          <option>Ensino Superior completo</option>

          <button>Próxima Etapa</button>
        </select>
      </div>
    );
  }
}
