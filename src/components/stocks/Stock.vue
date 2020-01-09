<template>




    <v-card class='col-lg-12 col-md-4 my-4'>
      <v-card-title>{{stock.name}}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>{{stock.price}}</v-card-text>
      <v-form>
        <v-text-field
          v-model='quantity'
          placeholder='Quantity'
          type='number'

        ></v-text-field>
        <v-btn
        @click='buyStock'
        :disabled="insufficientFunds || quantity <= 0 && !Number.isInteger(quantity)">
          {{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
        </v-btn>
      </v-form>
    </v-card>


</template>


<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>
<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>
