import { gql } from "@apollo/client";

export const POKEMON_LIST = gql`
  query pokemonList(
    $limit: Int!
    $offset: Int!
    $search: String
    $maxPokemonId: Int!
  ) {
    pokemon: pokemon_v2_pokemon(
      order_by: { id: asc }
      where: { id: { _lte: $maxPokemonId }, name: { _ilike: $search } }
      limit: $limit
      offset: $offset
    ) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
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

export const POKEMON_DETAILS = gql`
  query pokemonDetails($id: Int!) {
    pokemon: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        base_stat
        stat: pokemon_v2_stat {
          name
        }
      }

      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }
    }
    description: pokemon_v2_pokemonspeciesflavortext(
      where: { version_id: { _eq: 10 }, pokemon_species_id: { _eq: $id } }
    ) {
      flavor_text
    }
  }
`;