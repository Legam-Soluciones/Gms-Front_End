<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Progreso />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Progreso from "@/components/Progreso.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Progreso
  }
};
</script>
