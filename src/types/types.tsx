export enum TYPES {
  NORMAL = 'Normal',
  FIGHTING = 'Fighting',
  FLYING = 'Flying',
  POISON = 'Poison',
  GROUND = 'Ground',
  ROCK = 'Rock',
  BUG = 'Bug',
  GHOST = 'Ghost',
  STEEL = 'Steel',
  FIRE = 'Fire',
  WATER = 'Water',
  GRASS = 'Grass',
  ELECTRIC = 'Electric',
  PSYCHIC = 'Psychic',
  ICE = 'Ice',
  DRAGON = 'Dragon',
  DARK = 'Dark',
  FAIRY = 'Fairy'
};

export type PokemonResult = {
  id: number;
  name: string;
  description: string;
  photo: string;
  type1: TYPES;
  type2?: TYPES;
};