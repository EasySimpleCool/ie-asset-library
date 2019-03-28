<template>
  <div class="main-grid">
    <Sidenav/>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
import Sidenav from '../components/Sidenav'
export default {
  components: {
    Sidenav
  }  
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.main-grid {
  background: #BABBBD;
  display: grid;
  grid-template-columns: 240px 1fr [main] 6fr 1fr
}

main {
  padding: 148px 0 148px 0;
  grid-column: main;
}
</style>

