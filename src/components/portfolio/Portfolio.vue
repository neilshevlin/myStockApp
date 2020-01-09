<template>

    <div>
      <!-- <h1 v-if=''>No Stocks</h1> -->
      <!-- //// Add a system to watch when the array holding stock is filled and v-if a default empty -->
        <!-- <span v-for="(val,key,index) of person">key: {{key}}, val: {{val}}<span v-if="index != Object.keys(person).length - 1">, </span></span> -->
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>
