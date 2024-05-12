import { Character } from '../../../types/character';

interface CharacterItemProps {
  character: Character;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character: { 
  id,
  image,
  name,
  status,
  species,
  gender,
  origin: { name: originName },
  location: { name: locationName }
} }) => {
  return (
    <div className="item">
      <div className='item__details'>
        <img
          className="item__image"
          src={image}
          alt={name}
        />
        <div>
          <h3 className="item__title">{id} {name}</h3>
          <div className='item__info-block'>
            <p className="item__info">Status: {status}</p>
            <p className="item__info">Species: {species}</p>
            <p className="item__info">Gender: {gender}</p>
            <p className="item__info item__info-property">Origin: {originName}</p>
            <p className="item__info item__info-property">Location: {locationName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
