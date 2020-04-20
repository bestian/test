<template>
  <div id="app">
    <nav class="ui menu">
      <router-link class = "item" to="/">
        <i class="home icon"/>
      </router-link>
      <router-link class = "item" to="/lorem">
        <i class="file icon"/>
      </router-link>
      <router-link class = "item" to="/words">
        <i class="pencil icon"/>
      </router-link>
    </nav>
    <img src="./assets/logo.png">
    <router-view :words="words"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      words: ['資料下載中']
    }
  },
  mounted: function () {
    this.$http.get('https://www.moedict.tw/c/index.json').then(response => {
      // get body data
      this.words = response.body
    }, response => {
      // error callback
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
