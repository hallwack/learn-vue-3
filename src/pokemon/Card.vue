<template>
  <div>
    <div class="card">
      <div class="title">
        <slot name="title" />
      </div>
      <div class="content">
        <slot name="content" />
      </div>
      <div class="desc">
        <slot name="desc" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border: 1px solid silver;
  border-radius: 6px;
  max-width: 200px;
  margin: 0 8px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgray;
  transition: 0.3s;
}

.card:hover {
  transition: 0.3s;
  box-shadow: 0px 1px 9px darkgray;
}

.title,
.content,
.desc {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}

.title,
.content {
  border-bottom: 1px solid silver;
}

.title {
  font-size: 1.25em;
}
</style>