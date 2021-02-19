<template>
  <div>
    <div class="cards">
      <card
        v-for="pokemon in pokemons"
        :key="pokemon"
        @click="click(pokemon)"
        :class="{ opace: selectedId && pokemon.id !== selectedId }"
      >
        <template v-slot:title> {{ pokemon.name }} #{{ pokemon.id }} </template>
        <template v-slot:content>
          <img :src="pokemon.sprite" alt="" />
        </template>
        <template v-slot:desc>
          <div v-for="type in pokemon.types" :key="type">
            {{ type }}
          </div>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  props: {
    pokemons: {
      type: Array,
    },
    selectedId: {
      type: Number,
    },
  },
  methods: {
    click(pokemon) {
      this.$emit("pokemonClicked", pokemon);
    },
  },
};
</script>

<style scoped>
.opace {
  opacity: 0.5;
}

.cards {
  display: flex;
  margin: 20px 0;
}

.card:hover {
  opacity: 1;
}

img {
  width: 100%;
}
</style>