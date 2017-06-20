<template>
  <!--<div id="app">-->
  <v-app>
    <toolbar></toolbar>
    <!--<header>
      <span>Vue.js PWA</span>
    </header>-->
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  <!--</div>-->
  </v-app>
</template>

<script>
import Toolbar from './components/layout/Toolbar'
export default {
  name: 'app',

  components: {
    Toolbar
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #4fc08d;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}*/
</style>
