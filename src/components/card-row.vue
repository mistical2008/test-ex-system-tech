<template>
  <div class="card__row row">
    <div class="row__wrapper">
      <header class="row__header">
        <span class="row__meta"
          >{{ transaction[0].name + "&nbsp;" }} №{{id}}</span
        >
        <span class="row__price">{{calcTotal + "&nbsp;"}} руб.</span>
      </header>
      <div class="row__content row-content">
        <div class="row-content__header">Товаров: {{productsTotalQty}}</div>
        <ProductsList :products="transaction" />
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

    computed: {
        productsTotalQty() {
          return ( this.transaction )? this.transaction.length : 0;
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
