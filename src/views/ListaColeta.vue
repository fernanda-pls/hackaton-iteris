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

    <div>
      
      <v-btn color="blue lighten-1" @click="filtrarCategoria" icon>
        <v-icon >mdi-magnify</v-icon>
      </v-btn>
    </div>

    <v-simple-table dark fixed-header height="500px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Centro de Coleta</th>
            <th colspan="4" class="text-center">Endereço/ Material</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pontos in PostosColeta" :key="pontos.id" min-height="300px">
            <td width="150px">
              <img :src="pontos.imagem" :alt="pontos.nome" height="100px" width="150px" class="mt-3 mb-1">
              <br>
              <p class="text-center">{{ pontos.nome }}</p>
            </td>
            <td>
              {{ pontos.endereco }}
              <ul>
                <li v-for="categoria in pontos.categorias" :key="categoria" class="text-grey darken-1"> {{ categoria }}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<style scoped>
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
      Categorias: []
    };
  },
  methods: {
    filtrarCategoria() {
      this.PostosColeta.filter( postos => {
        this.Categorias = postos.categorias
        console.log(this.Categorias)
      })
    }
  },
  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json")
      .then(resposta => resposta.json())
      .then(json => {
        this.PostosColeta = json;
      });
  }
};
</script>