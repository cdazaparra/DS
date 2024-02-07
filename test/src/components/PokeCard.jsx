import React from "react";
const PokeCard = ({ pokemons }) => {
    return (   
        <div>
            <h1 className="">{pokemons.name}</h1>
      <img
        src={pokemons.sprites.front_default}
        alt="Pokemon name"
        width="150"
      ></img>
      <div>
        
      <p>
          {pokemons.types[0].type.name}
        </p>
        <p>
          {pokemons.weight}
        </p>
        <p>
          {pokemons.height}
        </p>
      </div>
        </div>
            );
          };
          
          export default PokeCard;