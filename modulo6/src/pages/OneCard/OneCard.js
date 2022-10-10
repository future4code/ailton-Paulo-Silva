import "./styles.css";
import { tarot } from "../../data/tarot.js";

export default function OneCard() {
  const cardNumber = Math.floor(Math.random() * (78 - 0 + 1)) + 0;

  return (
    <div className="div-one-card">
      <h1>{tarot.cards[cardNumber].name}</h1>
      <img src={tarot.imagesUrl + tarot.cards[cardNumber].image}></img>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}
