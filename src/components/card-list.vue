<template>
  <ul class="card-list">
    <template v-for="(ops, day) in data" :key="day" >
      <Card :operations="ops" :day="day" />
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
