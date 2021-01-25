<!-- Este archivo es el de inicio. No tiene muchas funciones, pero puede que en el futuro se pueda poner algo más-->
<template>
  <v-container>
    <template>
      <v-parallax src="@/assets/img12.jpg" height="150"></v-parallax>
    </template>
    <br /><br />
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/img2.png')"
          class="my-3"
          contain
          height="200"
        />
        <br /><br />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bienvenido a G.M.S
        </h1>

        <p class="subheading font-weight-regular">
          Plataforma de Administración online
          <br />
          Para más información de Más Salud Slim Clinic ingresa al link:
          <a href="http://clinicamassaludcr.com/" target="_blank"
            >clinicamassaludcr.com</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Rejuvenecimiento Facial
        </h2>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Clinica Médica
        </h2>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Estética
        </h2>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Spa
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
