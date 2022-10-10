import "./styles.css";
import { useState } from "react";
import AllCards from "./pages/AllCards/AllCards";
import Initial from "./pages/Initial/Initial";
import OneCard from "./pages/OneCard/OneCard";

export default function App() {
  const [page, setPage] = useState("Initial");
  // const [page, setPage] = useState("Cards");

  return (
    <div className="App">
      {page === "Initial" ? (
        <Initial setPage={setPage} />
      ) : page === "Cards" ? (
        <AllCards setPage={setPage} />
      ) : (
        <OneCard />
      )}
    </div>
  );
}
