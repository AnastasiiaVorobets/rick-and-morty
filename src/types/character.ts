export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown'; 
  species: string;
  type: string;
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown';
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}
