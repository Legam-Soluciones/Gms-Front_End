<!-- En todas las carpetas de Views simplemente se exportará un componente de la carpeta de Components -->
<template>
  <div>
    <v-carousel :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <template>
      <div>
        <br /><br />
        <imagesComponent />
      </div>
    </template>
    <template>
      <div>
        <br /><br /><br />
        <infopanelComponent />
      </div>
      <br />
    </template>
    <template>
      <div>
        <footerComponent />
      </div>
    </template>
  </div>
</template>

<script>
import imagesComponent from "@/components/Home/imagesComponent.vue";
import infopanelComponent from "@/components/Home/infopanelComponent.vue";
import footerComponent from "@/components/Home/footerComponent.vue";

// @ is an alias to /src

export default {
  components: {
    imagesComponent,
    infopanelComponent,
    footerComponent
  },
  name: "Home",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>
