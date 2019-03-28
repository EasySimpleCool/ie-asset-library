<template>
    <div v-editable="blok" class="image">
      <img :src="blok.image"> 
    </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
.image {
  text-align: center;
}

img {
  width:100%;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
  background-color: none;
}
</style>