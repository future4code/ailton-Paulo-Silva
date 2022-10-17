import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/pt-br";
import logo from "./logo.svg";
import "./styles.css";

const App = () => {
  const api = axios.create({
    baseURL: "https://brainn-api-loterias.herokuapp.com/api/v1/",
  });

  const [loterias, setLoterias] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [concursoListId, setConcursoListId] = useState([]);
  const [selectValue, setSelectValue] = useState("0");

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

  const concursoId = concursos
    .filter((res) => res.loteriaId == selectValue)
    .map((res) => res.concursoId);

  const colors = [
    {
      id: 0,
      name: "mega-sena",
      color: "#6BEFA3",
    },
    {
      id: 1,
      name: "quina",
      color: "#8666EF",
    },
    {
      id: 2,
      name: "lotofacil",
      color: "#DD7AC6",
    },
    {
      id: 3,
      name: "lotomania",
      color: "#FFAB64",
    },
    {
      id: 4,
      name: "timemania",
      color: "#5AAD7D",
    },
    {
      id: 5,
      name: "diaDaSorte",
      color: "#BFAF83",
    },
  ];

  const color = colors
    .filter((res) => res.id == selectValue)
    .map((res) => res.color);
  useEffect(() => {
    api
      .get(`/concursos/${concursoId[0]}`)
      .then((response) => {
        setConcursoListId([response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectValue]);

  const Background = () => (
    <div className="main-background">
      <svg
        min-width="100%"
        height="100vh"
        viewBox="0 0 613 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M613 0C613 0 361.26 475.032 613 1024H0V0H613Z" fill={color} />
      </svg>
    </div>
  );

  return (
    <div className="container">
      <div className="main">
        <Background color={color} />
        <div className="info">
          <select
            className="select"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            {loterias.map((res) => (
              <option value={res.id} key={res.id}>
                {res.nome.toUpperCase()}
              </option>
            ))}
          </select>
          {concursoListId.map((res) => (
            <>
              <div className="info-logo">
                <img src={logo} />
                {colors
                  .filter((res) => res.id == selectValue)
                  .map((res) => (
                    <span>{res.name.toLocaleUpperCase()}</span>
                  ))}
              </div>

              <div className="info-footer">
                <p>CONCURSO</p>
                <span>
                  {res.id} - {moment(`${res.data}`).format("L")}
                </span>
              </div>
            </>
          ))}
        </div>
        <div className="second-section">
          <ul>
            {concursoListId.map((res) =>
              res.numeros.map((items) => (
                <li>
                  <strong>{items}</strong>
                </li>
              ))
            )}
          </ul>
          <p>
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
