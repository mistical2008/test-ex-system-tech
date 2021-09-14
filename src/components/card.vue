<template>
  <li class="card">
    <header 
      @click="toggleRows()"
      class="card__header icon icon_s icon_corner-down"
    >
      <div class="header-wrapper">
        <span class="header__date">{{ day + "&nbsp;" }}</span>
        <span class="header__summary"
          >Документов: ({{sum}}₽)</span
        >
      </div>
    </header>

    <template v-for="(transaction, id) in transactions" :key="id">
      <transition appear name="slide-fade">
        <CardRow v-show="showRows" :transaction="transaction" :id="id" />
      </transition>
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
      return {
        showRows: false,
      }
    },

    created() {
      this.sum = this.calcDaySummary().toFixed(2);
      this.transactions = this.groupByTransactions();
      console.log(this.transactions);
    },

    methods: {

      toggleRows() {
        this.showRows = !this.showRows;
      },

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
