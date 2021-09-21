<template>
  <main class="content">
    <div class="_wrapper">
      <div class="_container">
        <template v-if="loading">
          ...Loading
        </template>
        <template v-else>
          <Cards v-bind:data="operations" />
        </template>
      </div>
    </div>
  </main>
</template>

<script>
  import Cards from "./components/card-list.vue";

  export default {
    name: 'App',
    components: {
      Cards,
    },

    data() {
      return {
        operations: null,
        loading: false,
      };
    },

    created() {
      this.fetchOperations();
    },

    methods: {
      fetchOperations() {
        this.loading = true;
        fetch('db.json')
          .then(res => res.json())
          .then(json => {
            this.operations = this.groupByDay(json);
            this.loading = false;
          })
          .catch(err => console.error(err.message));
      },

      groupByDay(data) {
        return data
          .operations
          .reduce((prev, curr, _idx, _arr) => {
          const {date} = curr;
          const [ day, ] = date.split(' ');

          if(!prev[day]) {
            prev[day] = [];
          }
          prev[day].push(curr);

          return prev;
        }, {})
      },
    },
  };
</script>

<style src="./styles/index.css"></style>
