import { Character } from "../../../types/character";
import './EpisodeCharacterItem.scss';

const EpisodeCharacterItem: React.FC<Character> = ({id, name, image }) => (
  <div className="character">
    <img src={image} alt={name} className="character__image"/>
    <p className="character__name">{id} {name}</p>
  </div>
);

export default EpisodeCharacterItem;