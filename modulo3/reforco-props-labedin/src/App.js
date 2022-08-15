import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://github.com/future4code/ailton-Paulo-Silva/blob/master/modulo1/projeto-portfolio/assets/img/perfil.png?raw=true"
          nome="Paulo Victor"
          descricao="Olá, eu me chamo Paulo Victor. Sou estudante de programação na Labenu. Atualmente estou estudando desenvolvimento front-end com React."
        />

        <ImagemButton
          imagem="https://i.pinimg.com/736x/8c/6d/2e/8c6d2ef9a7679d942f28005cf5216e54.jpg"
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        email="paulovictor@labenu.com"
        imagemEmail="https://www.pngmart.com/files/15/Vector-Email-Symbol-PNG-Image.png"
        endereco="Rua Labenu"
        imagemEndereco="https://www.freeiconspng.com/thumbs/location-icon-png/location-map-pins-png-3.png"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
