import React from "react";
import styled from "styled-components";
import "./styles.css";

const InputContainer = styled.div`
  gap: 10px;
  display: grid;
  grid-auto-flow: column;
`;

const TarefaLista = styled.ul`
  width: 200px;
  padding: 0;
`;

const Tarefa = styled.li`
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
  text-align: left;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas");
    if (tarefas) {
      const infoDasTarefas = localStorage.getItem("tarefas");
      const dadosConvertidos = JSON.parse(infoDasTarefas);
      this.setState({ tarefas: dadosConvertidos });
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criarTarefa = () => {
    let novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    let novaLista = [...this.state.tarefas, novaTarefa];

    this.setState({ tarefas: novaLista });
  };

  selecionarTarefa = (id) => {
    let novaLista = this.state.tarefas.map((cadaTarefa) => {
      if (id === cadaTarefa.id) {
        const novaTarefa = {
          ...cadaTarefa,
          completa: !cadaTarefa.completa,
        };
        return novaTarefa;
      } else {
        return cadaTarefa;
      }
    });

    this.setState({ tarefas: novaLista });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "completas":
          return tarefa.completa;
        case "pendentes":
          return !tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criarTarefa}>Adicionar</button>
        </InputContainer>
        <br />

        <InputContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputContainer>
        <TarefaLista>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                onClick={() => this.selecionarTarefa(tarefa.id)}
                completa={tarefa.completa}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaLista>
      </div>
    );
  }
}

export default App;
