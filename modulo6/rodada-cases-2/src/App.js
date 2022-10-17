import "./styles.css";
import React, { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const api = axios.create({
    baseURL: "https://brainn-api-loterias.herokuapp.com/api/v1/",
  });

  const [loterias, setLoterias] = useState([]);
  const [concursos, setConcursos] = useState([]);

  useEffect(() => {
    api
      .get("/loterias")
      .then((response) => {
        setLoterias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get("/loterias-concursos")
      .then((response) => {
        setConcursos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <select name="concurso" id="concurso">
          <option value="MEGA-SENA">MEGA-SENA</option>
          <option value="QUINA">QUINA</option>
          <option value="LOTOFÁCIL">LOTOFÁCIL</option>
          <option value="LOTOMANIA">LOTOMANIA</option>
          <option value="TIMEMANIA">TIMEMANIA</option>
          <option value="DIA DE SORTE">DIA DE SORTE</option>
        </select>
      </div>
    </div>
  );
}
