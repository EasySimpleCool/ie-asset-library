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
h1 {
font-family: 'Crimson Text', serif;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 57px;
color: #1B1B1B;
}
h3 {
font-family: 'Proxima-Nova', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
letter-spacing: 2px;
text-transform: uppercase;
color: #202020;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.main-grid {
  background: #F8F8F8;
  display: grid;
  grid-template-columns: 240px 1fr [main] 6fr 1fr
}

main {
  padding: 148px 0 148px 0;
  grid-column: main;
}
</style>

