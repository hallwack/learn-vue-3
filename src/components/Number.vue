<template>
  <div>
    <!-- <div id="number" :class="getOddEvenNumber(number)">
      {{ number }}
    </div> -->

    <button :class="getOddEvenNumber(number)" @click="handleClick">
      {{ number }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Number",
  props: {
    number: {
      type: Number,
      require: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("chosen", { number: this.number });
      // console.log(this.number);
    },
    getOddEvenNumber(number) {
      if (number % 2 == 0) {
        return "red";
      } else {
        return "blue";
      }
    },
    isEven(number) {
      return number % 2 == 0;
    },
  },
};
</script>

<style>
</style>