import "./styles.css";

export default function Card(props) {
  return (
    <div className="div-card">
      <h2>{props.name}</h2>
      <img src={props.imgSrc}></img>
    </div>
  );
}
