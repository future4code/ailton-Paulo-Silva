import "./styles.css";

export default function Initial(props) {
  const changeToCards = () => {
    props.setPage("Cards");
  };

  return (
    <div className="div-body">
      <div className="div-welcome">
        <h1>Boas vindas ao Jogo de Tarot!</h1>
        <p>Jogue as cartas e encontre a resposta para a sua questão!</p>
        <button onClick={changeToCards}>Ir para o jogo</button>
      </div>
    </div>
  );
}
