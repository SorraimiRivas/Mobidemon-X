import { gql } from "@apollo/client";

export const POKEMON_LIST = gql`
  query pokemonList($offset: Int!, $search: String, $maxPokemonId: Int!) {
    pokemon: pokemon_v2_pokemon(
      order_by: { id: asc }
      where: { id: { _lte: $maxPokemonId }, name: { _ilike: $search } }
      limit: 21
      offset: $offset
    ) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
    }
    total: pokemon_v2_pokemon_aggregate(
      where: { id: { _lte: $maxPokemonId }, name: { _ilike: $search } }
    ) {
      agg: aggregate {
        count
      }
    }
  }
`;
