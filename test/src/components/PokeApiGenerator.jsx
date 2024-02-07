import React, { useState, useEffect } from "react";
import getPokemonApi from "../api/getPokemonApi";
import PokeCard from "./PokeCard";
const PokeApiGenerator = () => {
    const [state, setState] = useState(false);
    const [pokemonsList, setPokemonsList] = useState([]);
    const [search, setSearch] = useState("");
    const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
    useEffect(() => {
        (async () => {
          await loadPokemons();
        })();
      }, []);
      const loadPokemons = async () => {
        const response = await getPokemonApi(urlBase);
        setPokemonsList(response);
      };
      const searchPokemon = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
      };
      const validator = search === "" ? true : false;
  return (
    <div>
        <h1>A</h1>
        <h1>A</h1>
        <h1>A</h1>
        <h1>A</h1>
        <h1>A</h1>
        <h1>A</h1>
    <h1
        className=""
        onClick={() => setState(!state)}
      >
        PokeApi
      </h1>
      
      <div className="m-4">
      <input
        className="rounded-xl p-1"
        placeholder="Buscar..."
        onChange={searchPokemon}
      ></input>
    </div>
{pokemonsList.map((pokemons) => (
    <div key={pokemons.id}>
      <div>
        {validator && (
          <div>
            <PokeCard
              pokemons={pokemons}
              key={pokemons.id}
              search={search}
            ></PokeCard>
          </div>
        )}
      </div>
      <div>
        {!validator && (
          <div>
            {pokemons.name.includes(search) && (
              <div>
                <PokeCard
                  pokemons={pokemons}
                  key={pokemons.id}
                  search={search}
                ></PokeCard>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  ))}
</div>
)}

export default PokeApiGenerator