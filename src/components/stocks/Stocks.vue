<template lang="html">

  <div id="staggered-list-demo">
<h1 class='ml-9'>Search available stocks</h1>
    <v-text-field
      class='ml-6'
      shaped
      outlined
      dense
      v-model='query'
      label='Search'
      ></v-text-field>

  <transition-group
    name="staggered-fade"
    tag="ul"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >

  <app-stock
      v-for="(stock, index) in computedList"
      :stock="stock"
      v-bind:key='stock.name'
      v-bind:data-index='index'
  ></app-stock>




  </transition-group>
</div>

</template>

<script>
import velocity from 'velocity-animate';
import Stock from './Stock.vue';

export default {
  components: {
      appStock: Stock
  },
  data() {
    return {
      query: '',
    }
  },
  computed: {
    stocks() {
        return this.$store.getters.stocks;
    },
    computedList: function () {
      var vm = this
      return this.stocks.filter(function (stock) {
        return stock.name.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    },

  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 1
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '15em' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 1
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }


 }


</script>

<style lang="css" scoped>
</style>
