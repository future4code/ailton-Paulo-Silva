import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { AppConfig } from "./style"
import { PageSection } from "./style"
import { H2 }  from "./style"
import { CardPequeno } from "./style"

function App() {
  return (
    <div className="App">
      <AppConfig>
      <PageSection>
        <H2>Dados pessoais</H2>
        <CardGrande
          imagem="https://github.com/future4code/ailton-Paulo-Silva/blob/projeto-portfolio/modulo1/projeto-portfolio/assets/img/perfil.png?raw=true"
          nome="Paulo Victor"
          descricao="Me chamo Paulo Victor. Sou estudante de programação Full Stack na Labenu. Tenho conhecimentos em HTML, CSS, Javascript e Python."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </PageSection>

      <CardPequeno>
        <p><img src="https://cdn.iconscout.com/icon/free/png-64/email-529-431258.png" width={20} /> <b>Email:</b> code@gmail.com</p>
      </CardPequeno>

      <CardPequeno>
      <p><b><img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/adress-5118449-4281721.png" width={20} /> Endereço:</b> Code Street</p>
      </CardPequeno>

      <PageSection>
        <H2>Experiências profissionais</H2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Programa intensivo com mil horas de experiência prática em desenvolvimento Full Stack. Principais habilidades trabalhadas durante o curso: HTML, CSS, Javascript, React JS, Node JS, Jest, Typescript, MySQL, AWS, Git | GitHub"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </PageSection>

      <PageSection>
        <H2>Minhas redes sociais</H2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </PageSection>
      </AppConfig>
    </div>
  );
}

export default App;
