/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Container } from "./styles";

const Hooks = ({ history }) => {
  // declaração dos estados
  const [counter, setCounter] = useState(0);
  const [colors] = useState(["#a5c639", "#e53238", "#f4ae01", "#00a4ef"]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Conteudo é executado toda vez que o state de "counter" é alterado
    handleIndex();
  }, [counter]);

  function handleIndex() {
    if (index !== colors.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <Container bg={colors[index]}>
      <h1>Utilizando React Hooks</h1>
      <h1>Counter = {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Adicionar ao Counter
      </button>
      <button
        className="back"
        onClick={() => {
          history.push("/");
        }}
      >
        Back
      </button>
    </Container>
  );
};

export default Hooks;
