<template>
  <v-container>
    <v-img
      class="rec-img"
      lazy-src="https://img.icons8.com/bubbles/2x/recycle-sign.png"
      max-height="80"
      max-width="105"
      
      src="https://img.icons8.com/bubbles/2x/recycle-sign.png"
    ></v-img>
    <h2 class="text-h5 text-center pt-3 mb-3 mt-5">Lista de Postos de CCS</h2>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th>Endereço</th>
            <th>CCS</th>
            <th>CEP</th>
            <th>Material</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pontos in PostosColeta" :key="pontos.id">
            <td>
              <v-avatar size="24">
                <img :src="pontos.imagem" :alt="pontos.nome" />
              </v-avatar>
              <span class="pl-2">{{ pontos.nome }}</span>
            </td>
            <td>{{ pontos.endereco }}</td>
            <td>{{ pontos.cep }}</td>
            <td>
              <ul>
                <li v-for="categoria in pontos.categorias" :key="categoria"> {{ categoria }}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "PostosColeta",
  data() {
    return { PostosColeta: [] };
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

<style scoped>

</style>