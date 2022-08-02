import React, { Component } from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const Div = styled.div`
  justify-content: center;
  margin: auto;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 20px;
`;

export default class App extends Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;

      case 2:
        return <Etapa2 />;

      case 3:
        return <Etapa3 />;

      case 4:
        return <Final />;
    }
  };

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };

  render() {
    return (
      <Div>
        {this.renderizaEtapa()}
        {this.state.etapa === 4 || (
          <Button onClick={this.irParaProximaEtapa}>Próxima etapa</Button>
        )}
        {/* {sumirBotao} */}
      </Div>
    );
  }
}
