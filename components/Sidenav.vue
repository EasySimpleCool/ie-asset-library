<template>
  <div>
    <ul class="footer-links">
      <nuxt-link to="/"><button>Home</button></nuxt-link>
      <nuxt-link to="/logos"><button>Logos</button></nuxt-link>
      <nuxt-link to="/colours"><button>Colours</button></nuxt-link>
      <nuxt-link to="/typography"><button>Typography</button></nuxt-link>
    </ul>
  </div>
</template>

<style scoped>
div {
  background: #202020;
  height: 100%;
}

.footer-links {
  display: flex;
  flex-direction: column;
}

.footer-links {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
}
</style>
