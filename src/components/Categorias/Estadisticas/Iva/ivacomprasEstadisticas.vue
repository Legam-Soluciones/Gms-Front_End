<template>
  <v-card
    class="mx-auto text-center"
    color="light-blue darken-4"
    dark
    max-width="425"
  >
    <v-card-text>
      <v-sheet color="light-blue lighten-2">
        <v-sparkline
          :value="value"
          color="#FAFAFA"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item"> ${{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        IVA de compras
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text>
        Estadisticas
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760]
  })
};
</script>
