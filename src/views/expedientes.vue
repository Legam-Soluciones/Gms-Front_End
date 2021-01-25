<!-- En todas las carpetas de Views simplemente se exportará un componente de la carpeta de Components -->
<template>
  <expedientesComponent />
</template>

<script>
import expedientesComponent from "@/components/Categorias/Expedientes/expedientesComponent.vue";

export default {
  components: {
    expedientesComponent
  }
};
</script>
