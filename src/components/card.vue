<template>
  <li class="card">
    <header class="card__header">
      <div class="header-wrapper">
        <span class="header__date">{{ day + "&nbsp;" }}</span>
        <span class="header__summary"
          >Документов: ({{sum}}руб.)</span
        >
      </div>
    </header>

    <template v-for="(transaction, id) in transactions" :key="id">
      <CardRow :transaction="transaction" :id="id" />
    </template>

  </li>
</template>

<script>
  import CardRow from "./card-row.vue";

  export default {
    name: "Card",
    props: ["operations", "day"],
    components: {
      CardRow,
    },

    data() {
      sum: 0;
      transactions: null;
    },

    created() {
      this.sum = this.calcDaySummary().toFixed(2);
      this.transactions = this.groupByTransactions();
      console.log(this.transactions);
    },

    methods: {
      calcDaySummary() {
        const res = this.operations.reduce((sum, op) => {
          switch (op.name) {
            case 'Расчет':
              return sum - (op.price * op.quantity);
            
            case 'Приход':
              return sum + (op.price * op.quantity);

            default:
              return sum;
          }
        }, 0);

        return res;
      },

      groupByTransactions() {
        const res = this.operations.reduce((prev, curr) => {
          const {id} = curr;

          if(!prev[id]) {
            prev[id] = [];
          }
          prev[id].push(curr);

          return prev;
        }, {})

        return res;
      }
    }
  }
</script>
