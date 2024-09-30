import { TYPES } from "../modules/TypeChip/TypeChip";

export type PokemonResult = {
  id: number;
  name: string;
  description: string;
  photo: string;
  type1: TYPES;
  type2?: TYPES;
};