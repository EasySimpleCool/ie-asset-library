<template>
  <div v-editable="blok" class="gridtest">
    <component
      :key="blok._uid"
      v-for="blok in blok.body"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style scoped>
.gridtest {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr;
}
</style>





