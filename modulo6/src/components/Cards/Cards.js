import "./styles.css";
import Card from "../Card/Card.js";
import { tarot } from "../../data/tarot.js";

export default function Cards() {
  const RenderCards = tarot.cards.map((card) => {
    return <Card imgSrc={tarot.imagesUrl + card.image} name={card.name}></Card>;
  });

  return <div className="div-cards">{RenderCards}</div>;
}
