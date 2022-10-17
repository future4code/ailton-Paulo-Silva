import "./styles.css";
import Cards from "../../components/Cards/Cards";

export default function AllCards(props) {
  const changeToInitial = () => {
    props.setPage("Initial");
  };

  return (
    <div>
      <div className="div-button-out">
        <button onClick={changeToInitial}>Sair do jogo</button>
      </div>
      <Cards />
    </div>
  );
}
