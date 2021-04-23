<template>
  <div>This is {{product}} index.vue</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    layout: "layout_a",
    computed:{
      ...mapState({
        product: state => state.product.productName
      })
    },
    methods: {
      ...mapActions({
        getProduct : "product/getProduct"
      })
    },
    mounted(){
      this.getProduct();
    }
}
</script>

<style>

</style>