import { Character } from "../types/character";

export const filterCharacters = (
  characters: Character[],
  searchTerm: string,
  statusFilter: string,
  genderFilter: string
): Character[] => {
  return characters.filter(character => {
    const isNameMatch = !searchTerm || character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isStatusMatch = !statusFilter || character.status === statusFilter;
    const isGenderMatch = !genderFilter || character.gender === genderFilter;
    return isNameMatch && isStatusMatch && isGenderMatch;
  });
};
