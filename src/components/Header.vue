<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      permanent

    >
    <h1 class='headline ml-6 mt-4'>By Neil Shevlin</h1>
      <v-list dense class='navMargin'>
        <v-list-item  class='mb-12'>
          <v-list-item-action>
            <v-btn text to='/' class='body-2'><strong>Home</strong></v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-list-item  class='my-12'>
          <v-list-item-action>
            <v-btn text to='/portfolio' class='body-2'><strong>Portfolio</strong></v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-list-item >
          <v-list-item-action>
          <v-btn text to='/stocks' class='body-2'><strong>Stocks</strong></v-btn>
          </v-list-item-action>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="black"
      dark
    >

      <v-toolbar-title>Stock Trader</v-toolbar-title>
      <div class="flex-grow-1"></div>

      <p class='my-4 title'>Funds: {{ funds | currency }}</p>
      <v-spacer></v-spacer>
      <v-btn @click="endDay">End Day</v-btn>
      <v-spacer></v-spacer>


    </v-app-bar>

    <v-content>
      <!-- ///////////// -->
      <router-view></router-view>
      <!-- ///////////// -->
    </v-content>
    <v-footer
      color="black"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
      props: {
      source: String,
    },
        data() {
          return {
            drawer: null,
              isDropdownOpen: false
          }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>
<style>
.navMargin{
  margin-top: 20vh;
}
</style>
