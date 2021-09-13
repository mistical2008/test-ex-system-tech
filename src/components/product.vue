<template>
  <li class="product-list__item">
    <div class="product__image-wrapper _aspect-box_1x1">
      <img
      class="product__image"
      :src="product.image"
      alt=""
      />
    </div>
    <div class="product__info">
      <p class="product__name">{{product['product name']}}</p>
      <p class="product__numbers">
        <span>{{product.quantity}} штук x {{product.price}}₽</span>
        <span class="product__price">{{total}}₽</span>
      </p>
    </div>
  </li>
</template>

<script>
  export default {
    name: "Product",
    props: ["product"],

    computed: {
      total() {
        return ( this.product.price * this.product.quantity ).toFixed(2);
      }, 
    },
  }
</script>
