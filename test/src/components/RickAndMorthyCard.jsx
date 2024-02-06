

export const RickAndMorthyCard = ({character}) => {
  return (
    <div  className='Card'    >
        <div className="cardName">{character.name}</div>
        <img src={character.image} alt={character.name} className="cardImg"></img>
            <div className="cardData">
            <div className="carddataName">{character.name}</div>
            <div><span className="carddataStatus">{character.status}</span></div>
            <div><span className="carddataSpecie">{character.species}</span></div>
            <div><span className="carddataGender">{character.gender}</span></div>
            {character.type ? (<div><span className="carddataType"></span>{" "}{character.type}</div>) : ("" )}
        </div></div>
        )
  }
  export default RickAndMorthyCard