<template>
  <ul class="card-list">
    <template v-for="(ops, date) in data" :key="day" >
      <Card :operations="ops" :date="date" />
    </template>
  </ul>
</template>

<script>
  import Card from './card.vue'

  export default {
    name: "Cards",
    props: ["data"],
    components: {
      Card,
    }
  }
</script>
