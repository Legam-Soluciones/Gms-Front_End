<!-- En todas las carpetas de Views simplemente se exportará un componente de la carpeta de Components -->
<template>
  <documentosComponent />
</template>

<script>
import documentosComponent from "@/components/Categorias/Documentos/documentosComponent.vue";

export default {
  components: {
    documentosComponent
  }
};
</script>
