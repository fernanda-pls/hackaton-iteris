<template>
  <v-container>
    <v-img
      class="rec-img mb-4"
      src="https://img2.gratispng.com/20180429/hyq/kisspng-alternative-fuel-recycling-renewable-energy-5ae59c7d1eb202.7899606415249972451257.jpg"
    ></v-img>
    <h2 class="text-h5 text-center pt-3 mb-3 mt-5">Lista de Postos de CCS</h2>
    <v-simple-table dark
      fixed-header
      height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Endereço</th>
            <th colspan="1" class="text-center">CCS</th>
            <th colspan="2" class="text-left">Material</th>
          </tr>
        </thead>
            <tbody>
              <tr v-for="pontos of PostosColeta" :key="pontos.id" height="300px">
                <td>
                  <img :src="pontos.imagem" :alt="pontos.nome" height="100px" width="150px"/><br>
                  <span class="pl-2">{{ pontos.nome }}</span>
                </td>
                <td>{{ pontos.endereco }}</td>
                <td>{{ pontos.categorias }}</td>
              </tr>
            </tbody>
        <tbody></tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<style scoped>
rec-img {
  border-radius: 8px;
}
</style>

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