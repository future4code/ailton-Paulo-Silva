import React from "react";
import styled from "styled-components";
import Mensagens from "./components/Post/Mensagens";

const arrayMsg = [];

const MainContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  border: 1px solid gray;
  min-height: 100vh;
  background-color: #d1ffd4;
`;

const H1 = styled.h1`
  color: #00af0a;
`;

const DivMensagens = styled.div`
  min-height: 85vh;
`;

const FormContainer = styled.div`
  display: column;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding-bottom: 8px;
`;

const InputUsuario = styled.input`
  width: 15%;
`;

const InputMensagem = styled.input`
  width: 65%;
  margin-inline: 10px;
`;

const Button = styled.button`
  width: 10%;
  background-color: #00d20e;
  border: none;
  padding: 3px;
  cursor: pointer;
`;
class App extends React.Component {
  state = {
    msg: arrayMsg,
    nomeUsuario: "",
    mensagemUsuario: "",
  };

  changeNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  changeMensagemUsuario = (event) => {
    this.setState({ mensagemUsuario: event.target.value });
  };

  addNovaMsg = () => {
    const novaMsg = {
      nomeUsuario: this.state.nomeUsuario,
      mensagemUsuario: this.state.mensagemUsuario,
    };

    this.setState({
      msg: [...this.state.msg, novaMsg],
      nomeUsuario: "",
      mensagemUsuario: "",
    });
  };

  render() {
    const componentesMsg = this.state.msg.map((p) => {
      return (
        <Mensagens
          nomeUsuario={p.nomeUsuario}
          mensagemUsuario={p.mensagemUsuario}
        />
      );
    });

    return (
      <MainContainer>
        <H1>WhatsLab</H1>
        <DivMensagens>{componentesMsg}</DivMensagens>
        <FormContainer>
          <InputUsuario
            placeholder={"Usuário"}
            value={this.state.nomeUsuario}
            onChange={this.changeNomeUsuario}
          />
          <InputMensagem
            placeholder={"Mensagem"}
            value={this.state.mensagemUsuario}
            onChange={this.changeMensagemUsuario}
          />
          <Button onClick={this.addNovaMsg}>Enviar</Button>
        </FormContainer>
      </MainContainer>
    );
  }
}

export default App;
