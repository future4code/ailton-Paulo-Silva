import "./styles.css";

export default function Card(props) {
  const checkShuffle = () => {
    if (!props.shuffle) {
      alert("Embaralhar primeiro!");
    }
    if (props.page === "Cards") {
      props.setPage("OnePage");
    }
  };

  return (
    <div className="div-card" onClick={checkShuffle}>
      <h2>{props.name}</h2>
      <img src={props.imgSrc}></img>
    </div>
  );
}
