<!-- En todas las carpetas de Views simplemente se exportará un componente de la carpeta de Components -->
<template>
  <tareasComponent />
</template>

<script>
import tareasComponent from "@/components/Categorias/Tareas/tareasComponent.vue";

export default {
  components: {
    tareasComponent
  }
};
</script>
