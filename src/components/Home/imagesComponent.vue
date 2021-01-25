<template>
  <v-row>
    <v-col cols="6" sm="3">
      <v-img
        :aspect-ratio="16 / 9"
        :width="width"
        :height="height"
        src="@/assets/post1.png"
      ></v-img>
    </v-col>

    <v-col cols="6" sm="3">
      <v-img
        :aspect-ratio="16 / 9"
        :width="width"
        :height="height"
        src="@/assets/post2.png"
        ><div class="fill-height repeating-gradient"></div
      ></v-img>
    </v-col>

    <v-col cols="6" sm="3">
      <v-img
        :aspect-ratio="16 / 9"
        :width="width"
        :height="height"
        src="@/assets/post3.png"
        ><div class="fill-height repeating-gradient"></div
      ></v-img>
    </v-col>

    <v-col cols="6" sm="3">
      <v-img
        :aspect-ratio="16 / 9"
        :width="width"
        :height="height"
        src="@/assets/post4.png"
        ><div class="fill-height repeating-gradient"></div
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    width: 450,
    height: 275
  })
};
</script>

<!--<style scoped>
  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(255,0,0,.25),
                        rgba(255,0,0,.25) 5px,
                        rgba(0,0,255,.25) 5px,
                        rgba(0,0,255,.25) 10px
                      );
  }
</style>-->
