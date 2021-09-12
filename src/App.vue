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
  import { formatDateNative } from "./utils/date.js";
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
            this.setOperations(this.groupByDay(json));
            this.loading = false;
          })
          // .then(_res => console.log(this.operations, this.loading))
          .catch(err => console.error(err.message));
      },

      groupByDay(data) {
        return data.operations.reduce((prev, curr, _idx, _arr) => {
          const {date} = curr;
          const [day] = date.split(' ');
          const dayFormated = formatDateNative(new Date(day));

          if(!prev[dayFormated]) {
            prev[dayFormated] = [];
          }
          prev[dayFormated].push(curr);

          return prev;
        }, {});
      },

      setOperations(data) {
        this.operations = data;
      },
    },
  };
</script>

<style src="./styles/index.css"></style>
