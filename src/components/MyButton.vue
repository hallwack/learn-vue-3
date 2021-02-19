<template>
  <div>
    <button :style="{ background, color }" :disabled="disabled">Button</button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
    background: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
button {
  background: none;
  color: none;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  filter: brightness(125%);
  transition: 0.5s;
}

button:disabled {
  opacity: 0.5;
}
</style>