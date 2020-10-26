<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Servicio o Producto",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Cantidad", value: "calories" },
        { text: "Precio Uniario", value: "fat" },
        { text: "Desc. (%)", value: "carbs" },
        { text: "Desc. (Unitario)", value: "protein" },
        { text: "IVA (%)", value: "iron" },
        { text: "IVA (Unitario)", value: "iron" },
        { text: "IVA (Total)", value: "iron" },
        { text: "Total (₡)", value: "iron" }
      ],
      desserts: [
        {
          name: " Dermapen ",
          calories: 100,
          fat: 100,
          carbs: 100,
          protein: 100,
          iron: "100"
        },
        {
          name: "Carboxiterapia",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Desintoxicación iónica",
          calories: 10,
          fat: 10,
          carbs: 10,
          protein: 10,
          iron: "7%"
        },
        {
          name: "Masajes",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        }
      ]
    };
  }
};
</script>
