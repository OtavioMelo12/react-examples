import React, { useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import { Container, CardFront, CardBack } from "./styles";

import Api from "./api";
import bgCards from "../../assets/bgCards.jpg";

const Cards = () => {
  const [personagens, setPersonagens] = useState([]);
  const [inputName, setInputName] = useState("");
  const [showButton, setShowButton] = useState(true);

  return (
    <Container background={bgCards}>
      {showButton ? (
        <button
          className="btn"
          onClick={() => {
            setPersonagens(Api);
            setShowButton(false);
          }}
        >
          Gerar 8 cards
        </button>
      ) : null}
      <ul>
        {personagens.map(personagem => (
          <li key={personagem.name}>
            <Flippy
              className="flip"
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              style={{
                width: "200px",
                height: "200px",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <FrontSide>
                <CardFront>
                  <img src={personagem.picture} alt="personagem1" />
                  <h1>{personagem.name}</h1>
                  <p>{personagem.description}</p>
                  <h3>Clique-me</h3>
                </CardFront>
              </FrontSide>
              <BackSide>
                <CardBack>
                  <h1>Olá! meu nome é {personagem.name}</h1>
                  <p>Eu Sou {personagem.description}</p>
                  <h3>Clique-me</h3>
                </CardBack>
              </BackSide>
            </Flippy>
          </li>
        ))}
        {!showButton ? (
          <form
            onSubmit={e => {
              e.preventDefault();
              setPersonagens([
                ...personagens,
                {
                  name: inputName,
                  picture: `https://api.adorable.io/avatars/285/${inputName}@adorable.png`,
                  description: "Apenas um personagem"
                }
              ]);
            }}
          >
            <label>Adicione mais um personagem:</label>
            <input
              onChange={e => setInputName(e.target.value)}
              type="text"
              placeholder="Digite o Nome do Personagem"
            />
            <button type="submit">Adicionar</button>
          </form>
        ) : null}
      </ul>
    </Container>
  );
};

export default Cards;
