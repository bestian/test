<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui container">
      <div class="ui segment">
        <div class="ui horizontal bulleted list">
          <div class="item" v-for = "w in words" v-bind:key= "w">
            <a :herf = "'https://www.moedict.tw/' + w" target="_blank">
              {{ w }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Words',
  data () {
    return {
      msg: '字典',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
