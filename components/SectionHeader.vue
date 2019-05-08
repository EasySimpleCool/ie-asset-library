<template>
    <div v-editable="blok" class="section-header">
      <h3>{{ blok.text }}</h3>
    </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style scoped>
.section-header {
  grid-column: span 2;
}
</style>