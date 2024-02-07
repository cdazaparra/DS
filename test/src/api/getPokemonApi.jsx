import axios from "axios"
const getPokemonApi = (url) => {
    return axios.get(url).then(async (res) => {
        let pokemons = [];
        await axios.all(
            res.data.results.map((pokemon) => {
                return axios.get(pokemon.url).then((res) => {
                    pokemons.push(res.data);
                });
            })
          );
          return pokemons;
        });
    };
    
    export default getPokemonApi;