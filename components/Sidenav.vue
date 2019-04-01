<template>
  <div class="sidenav-container">
    <ul class="sidenav-links">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/logos">Logos</nuxt-link>
      <nuxt-link to="/colours">Colours</nuxt-link>
      <nuxt-link to="/typography">Typography</nuxt-link>
    </ul>
  </div>
</template>

<style scoped>
.sidenav-container {
  background: #202020;
  height: 100vh;
  width: 240px;
  position: fixed;
}

.sidenav-links {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px;
}

a {
  font-family: proxima-nova, sans-serif;
  font-size: 18px;
  color: #ffffff;
  box-sizing: border-box;
  text-decoration: none;
  width: 100%;
  display: block;
  padding: 19px 15px;
}

a:hover {
  -webkit-transition: all 0.3s ease-out;
  background: #2A2A2A;
  transition: all 0.3s ease-out;
}
</style>
