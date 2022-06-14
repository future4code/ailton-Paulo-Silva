import "./App.css";
import Etapa1 from "./components/Etapa1.js";
import Etapa2 from "./components/Etapa2.js";
import Etapa3 from "./components/Etapa3.js";
import Final from "./components/Final.js";
import { Component } from "react";

class App extends Component {
  state = {
    etapa: 1,
  };

  escolheEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <Etapa2 />;
        break;
      case 3:
        return <Etapa3 />;
        break;
      case 4:
        return <Final />;
        break;
      default:
        return <Etapa1 />;
    }
  };

  passaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };

  render() {
    return (
      <div>
        {this.escolheEtapa()}
        <br />
        <button onClick={this.passaEtapa}>
          {!this.state.passaEtapa ? "Próxima etapa" : ""}
        </button>
      </div>
    );
  }
}

export default App;
