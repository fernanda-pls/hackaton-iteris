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
            <th class="text-left">Endereço</th>
            <th colspan="4" class="text-center">CCS</th>
            <th colspan="2" class="text-right">Material</th>
            <th class="text-right">CEP</th>
          </tr>
        </thead>
        <tbody></tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<style scoped>
.rec-img {
  border-radius: 8px;
  margin-left: 113px;
}
</style>
