<!-- Este documento le da un poco de estilo y forma al login -->
<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/layout/Navigation";

export default {
  name: "App2",

  components: {
    Navigation
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import "./scss/App.scss";
</style>
