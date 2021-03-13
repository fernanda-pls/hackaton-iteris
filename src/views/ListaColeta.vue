<template>
  <v-container class="d-flex flex-column align-center">
    <v-img
      class="rec-img"
      lazy-src="https://img.icons8.com/bubbles/2x/recycle-sign.png"
      max-height="80"
      max-width="105"
      src="https://img.icons8.com/bubbles/2x/recycle-sign.png"
    ></v-img>
    <h2 class="text-h5 text-center pt-3 mb-3 mt-5">Lista de Postos de CCS</h2>

    <v-card
      v-for="pc in PostosColeta"
      :key="pc.id"
      :loading="loading"
      class="mx-auto my-9"
      max-width="374"
      dark
    >
      <template slot="progress">
        <v-progress-linear
          color="green-lighten-1"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="222" :src="pc.imagem"></v-img>

      <v-card-title class="pt-5 pb-2">{{ pc.nome }}</v-card-title>

      <v-card-text class="my-0 px-4" text-center>
        <div>
          <span class="font-weight-bold mr-3">Endereço:</span>
          {{ pc.endereco }}
        </div>
        <div>
          <span class="font-weight-bold">CCS:</span> {{ pc.nome }}
        </div>
        <div><span class="font-weight-bold">Material Coletado:</span> {{ pc.categorias }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

    </v-card>

   
  </v-container>
</template>

<style scoped>""
.rec-img {
  border-radius: 8px;
}
</style>

<script>
export default {
  name: "PostosColeta",
  data() {
    return {
      PostosColeta: [],
      Categorias: [],
    };
  },
  methods: {
    filtrarCategoria() {
      this.PostosColeta.filter((postos) => {
        postos.categorias.foreach((categoria) => {
          this.Categorias.push(categoria);
        });
        console.log(this.Categorias);
      });
    },
  },
  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.PostosColeta = json;
      });
  },
};
</script>
