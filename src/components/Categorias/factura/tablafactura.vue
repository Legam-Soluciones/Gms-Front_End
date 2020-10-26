<template>
  <v-data-table
    :headers="headers"
    :items="Acciones"
    :items-per-page="5"
    item-key="name"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Acciones",
          align: "start",
          value: "name"
        },
        { text: "Nº", value: "n" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          n: "Ice cream"
        },
        {
          name: "Ice cream sandwich",
          n: "Ice cream"
        },
        {
          name: "Eclair",
          n: "Cookie"
        }
      ]
    };
  }
};
</script>
