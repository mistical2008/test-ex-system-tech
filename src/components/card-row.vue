<template>
  <div class="card__row row">
    <div class="row__wrapper">
      <header class="row__header">
        <span class="row__meta"
          >{{ transaction[0].doctype + '&nbsp;' }} №{{ id }}</span
        >
        <span class="row__price">{{ calcTotal + '&nbsp;' }} ₽</span>
      </header>
      <div class="row__content row-content">
        <div
          @click="toggleProducts()"
          class="row-content__header icon icon_triangle-down"
        >
          Товаров: {{ productsTotalQty }}
        </div>
        <transition appear name="slide-fade">
          <ProductsList v-show="showProducts" :products="transaction" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from './products.vue';

export default {
  name: 'CardRow',
  props: ['transaction', 'id'],
  components: {
    ProductsList,
  },

  data() {
    return {
      showProducts: false,
    };
  },

  methods: {
    toggleProducts() {
      this.showProducts = !this.showProducts;
    },
  },

  computed: {
    productsTotalQty() {
      return this.transaction ? this.transaction.length : 0;
    },

    calcTotal() {
      const res = this.transaction.reduce((prev, curr) => {
        const {quantity, price} = curr;
        return prev + quantity * price;
      }, 0);

      return res.toFixed(2);
    },
  },
};
</script>
