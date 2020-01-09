<template>
    <div>
        <v-row>
          <v-col class='col-4'>
            <h1>Welcome to my stock trader application</h1>
            <p class='body-2'>Built with Vue.js it allows a user to buy and sell imaginary stocks</p>
            <p class='body-2'>Its currently built with limited functionality</p>
            <p class='body-2'>Over time I'll be adding things and improving functionality</p>
            <p class='body-2'>Plans include...</p>
            <li class='body-2'>Live prices and tickers</li>
            <li class='body-2'>Connection to a firebase database</li>
            <li class='body-2'>Better UI/UX</li>
            <li class='body-2'>Graphs and visuals</li>
            <br>
            <p class='body-2'>However, I dont plan on spending a massive amount of time on this project. <br>I hope you enjoy</p>




          </v-col>
          <v-col class='mySvg'></v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>
<style lang="css" scoped>
.mySvg{
  background-image: url('../assets/finance.svg');
  background-size: 500px 500px;
  height: 75vh;
}
</style>
