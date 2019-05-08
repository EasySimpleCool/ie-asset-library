<template>
    <div v-editable="blok" class="asset-featured">
      <a :href="blok.image" download><img :src="blok.image"></a>
    </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style scoped>

.asset-featured {
  grid-column: span 2;
}

img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
  background-color: none;
}
</style>