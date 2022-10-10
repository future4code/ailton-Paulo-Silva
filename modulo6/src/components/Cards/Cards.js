import "./styles.css";
import Card from "../Card/Card.js";
import OneCard from "../../pages/OneCard/OneCard";
import { tarot } from "../../data/tarot.js";
import { useState } from "react";

export default function Cards() {
  const [shuffle, setShuffle] = useState(false);
  const [page, setPage] = useState("Cards");

  const RenderCards = tarot.cards.map((card) => {
    if (shuffle === false) {
      return (
        <Card
          imgSrc={tarot.imagesUrl + card.image}
          name={card.name}
          shuffle={shuffle}
        ></Card>
      );
    } else {
      return (
        <Card
          imgSrc={tarot.imageBackCard}
          name={"?"}
          shuffle={shuffle}
          page={page}
          setPage={setPage}
        ></Card>
      );
    }
  });

  const shuffleHandle = () => {
    setShuffle(!shuffle);
    if (shuffle) {
      setPage("Cards");
    }
  };
  return (
    <div className="div-cards">
      <div className="div-button-cards">
        <button onClick={shuffleHandle}>
          {shuffle ? "Reiniciar" : "Embaralhar cartas"}
        </button>
      </div>
      {page === "Cards" ? RenderCards : <OneCard />}
    </div>
  );
}
