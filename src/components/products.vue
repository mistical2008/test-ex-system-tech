<template>
  <ul class="product-list">
  <template v-for="product in products" :key="product['product name']">
    <Product :product="product" />
    <!-- {{product['product name']}} -->
  </template>
  </ul>
</template>

<script>
  import Product from "./product.vue";

  export default {
    name: "ProductsList",
    props: ["products"],

    components: {
      Product,
    },
  }
</script>
