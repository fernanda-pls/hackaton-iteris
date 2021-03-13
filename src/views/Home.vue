<template>
  <v-container>
    <v-card
      elevation="2"
      shaped
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            Coleta Seletiva
          </div>
          <v-list-item-title class="headline mb-1">
            Procure postos de coleta próximos
          </v-list-item-title>
          <v-list-item-subtitle>
            Ajude a reduzir os impactos ambientais relacionados ao descarte incorreto do lixo
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
        >
         Buscar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>