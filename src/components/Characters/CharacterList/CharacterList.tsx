import { Character } from '../../../types/character';
import CharacterItem from '../CharacterItem/CharacterItem';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="list">
      {characters.map(character => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
