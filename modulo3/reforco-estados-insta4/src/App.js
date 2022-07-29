import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const arrayPosts = [
  {
    nomeUsuario: "Joana",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150",
  },
  {
    nomeUsuario: "Antônio",
    fotoUsuario: "https://picsum.photos/50/51",
    fotoPost: "https://picsum.photos/200/151",
  },
  {
    nomeUsuario: "Pedro",
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152",
  },
];

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  width: 240px;
  padding: 30px;
  margin: 20px;
  border: 1px solid gray;
`;

class App extends React.Component {
  state = {
    posts: arrayPosts,
    nomeUsuario: "",
    fotoUsuario: "",
    postUsuario: "",
  };

  changenomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  changefotoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  changepostUsuario = (event) => {
    this.setState({ postUsuario: event.target.value });
  };

  addNovoPost = () => {
    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.postUsuario,
    };

    this.setState({
      posts: [...this.state.posts, novoPost],
      nomeUsuario: "",
      fotoUsuario: "",
      postUsuario: "",
    });
  };

  render() {
    const componentesPost = this.state.posts.map((p) => {
      return (
        <Post
          nomeUsuario={p.nomeUsuario}
          fotoUsuario={p.fotoUsuario}
          fotoPost={p.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <FormContainer>
          <input
            placeholder={"Seu nome"}
            value={this.state.nomeUsuario}
            onChange={this.changenomeUsuario}
          />
          <input
            placeholder={"Sua foto de perfil"}
            value={this.state.fotoUsuario}
            onChange={this.changefotoUsuario}
          />
          <input
            placeholder={"Foto do seu post"}
            value={this.state.postUsuario}
            onChange={this.changepostUsuario}
          />
          <button onClick={this.addNovoPost}>Criar Post</button>
        </FormContainer>
        {componentesPost}
      </MainContainer>
    );
  }
}

export default App;
