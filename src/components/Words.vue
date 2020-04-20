<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui container">
      <div class="ui segment">
        <form>
          <input type="text" name="k" v-model="myKey" placeholder="關鍵字查詢" v-autofocus/>
        </form>
        <hr/>
        <div class="ui horizontal bulleted list">
          <div class="item" v-for = "w in has(words, myKey)" v-bind:key= "w">
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
  props: ['words'],
  data () {
    return {
      msg: '字典',
      myKey: ''
    }
  },
  methods: {
    has: function (list, k) {
      if (!k) { return [] }
      var r = new RegExp(k)
      return list.filter(function (w) { return r.test(w) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
