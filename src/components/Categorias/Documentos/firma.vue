<!-- Este es el documento de Firma en caso de que quiera ser exportado.-->
<template>
  <div id="firma">
    <VueSignaturePad width="500px" height="500px" ref="signaturePad" />
    <div>
      <!--<button @click="save">Guardar Firma</button>-->
      <button @click="addFirma">Guardar Firma</button>
      <button @click="undo">Deshacer</button>
    </div>
  </div>
</template>
<script>
import { db } from "@/main.js";
export default {
  name: "MySignaturePad",
  data: () => ({
    imagen: null
  }),
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
    },

    async addFirma() {
      try {
        const { data } = this.$refs.signaturePad.saveSignature();
        await db.collection("Documentos").add({
          Firma: data
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
