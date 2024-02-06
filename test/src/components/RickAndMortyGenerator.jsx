import React, {useEffect, useState} from 'react'
import getCharactersApi from '../api/getCharactersApi'
import RickAndMorthyCard from './RickAndMorthyCard'

const RickAndMortyGenerator = () => {
    const [state, setState]= useState()
    const[charactersList, setcharactersList]= useState([])
    const urlBase = "https://rickandmortyapi.com/api"
    useEffect(() => {
        (async () => {
          await loadCharacters();
        })();
      }, []);
      const loadCharacters = async () => {
        const response = await getCharactersApi(urlBase);
        setcharactersList(response);
      };
  return (
    <div
      className='RAM'
    >
      <h1
        className='ramTitle'
        onClick={() => setState(!state)}
      >
        Rick And Morthy Api
      </h1>
      
        <div className='ramList'>
          {charactersList.map((character) => (
            <RickAndMorthyCard
              character={character}
              key={character.id}
            ></RickAndMorthyCard>
          ))}
        </div>
    </div>
  );
}

export default RickAndMortyGenerator