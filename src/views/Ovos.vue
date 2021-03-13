<template>
  <v-container class="container">
    <h2 class="text-h5 text-center mb-3 mt-6">Ovos de Páscoa</h2>

    <p>Escolha os produtores de ovos de Páscoa caseiros por cidade:</p>

    <v-row align="center" justify="space-around" class="mt-5">
      <router-link to="/ListaColeta">
        <v-btn class="ma-2" primary>AC - Rio Branco</v-btn>
      </router-link>
      <router-link to="/ListaColeta">
        <v-btn class="ma-2" primary>AM - Manaus</v-btn>
      </router-link>
      <router-link to="/ListaColeta">
        <v-btn class="ma-2" primary>AP - Macapá</v-btn>
      </router-link>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Ovos"
};
</script>

<style scoped>
.container a {
  text-decoration: none;
}
</style>

