import api from "./api";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Card, MainContainer, Sidebar } from "./styles";

import GlobalStyle from "./styles/global";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = () => {
    api.get("/").then((response) => setPokemons(response.data.results));
  };

  useEffect(() => getPokemons(), []);
  console.log(pokemons);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <MainContainer>
        {pokemons.map(({ name }) => (
          <Card key={name}>
            <img
              src={`https://img.pokemondb.net/sprites/black-white/normal/${name}.png`}
            ></img>
            <p>{name.toUpperCase({ name })}</p>
          </Card>
        ))}
      </MainContainer>
    </>
  );
}

export default App;
