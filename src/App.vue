<template>
  <div id="app">
    <pokemon-cards
      :pokemons="starters"
      @pokemonClicked="fetchEvolutions"
      :selectedId="selectedId"
    />

    <pokemon-cards :pokemons="evolutions" />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PokemonCards from "./pokemon/PokemonCards.vue";

const api = "https://pokeapi.co/api/v2/pokemon";
const starter_ids = [1, 4, 7, 20, 29];
export default {
  data() {
    return {
      starters: [],
      pokemon: null,
      evolutions: [],
      selectedId: null,
    };
  },
  async created() {
    const starters = await this.fetchData(starter_ids);
    this.starters = starters;
  },
  methods: {
    async fetchEvolutions(pokemon) {
      this.selectedId = pokemon.id;
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2]);
    },
    async fetchData(ids) {
      const response = await Promise.all(
        ids.map((id) => window.fetch(`${api}/${id}`))
      );
      const data = await Promise.all(response.map((res) => res.json()));
      return data.map((datum) => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other["official-artwork"].front_default,
        types: datum.types.map((type) => type.type.name),
      }));
      // const data = await response.json();
      // const pokemon = {
      // name: data.name,
      // sprite: data.sprites.other["official-artwork"],
      // types: data.types.map((type) => ({ name: type.type.name })),
      // };
      // console.log(pokemon);
    },
  },
  components: {
    PokemonCards,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
