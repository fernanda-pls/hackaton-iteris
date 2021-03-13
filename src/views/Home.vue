<template>
  <v-container class="home-container d-flex flex-column align-center">
    <h2 class="text-h2 text-center mb-3 mt-6">Conecta</h2>
    <v-img
      class="inicio-imagem mb-4"
      src="https://www.ferrovelhocoradin.com.br/wp-content/uploads/2019/06/Lixeiras.png"
      alt="Imagem Reciclagem"
    ></v-img>
    <p class="text">A Conecta é uma plataforma que aproxima os cidadãos dos postos de coleta espalhados pelo país. Nossa missão é tornar a reciclagem uma realidade, em prol do desenvolvimento sustentável.</p>

    <h3 class="text-h4 text-left mb-3 mt-6 align-self-start">Coleta Seletiva</h3>
    <p class="text">A Coleta Seletiva é um mecanismo de recolha dos resíduos, os quais são classificados de acordo com sua origem e depositados em contentores indicados por cores.</p>
    <p class="text">Ou seja, eles podem ser resíduos orgânicos ou materiais recicláveis como papel, pástico, vidro, dentre outros. Além deles, materiais hospitalares e radioativos têm um destino diferente.</p>

    <router-link to="/ListaColeta">
      <v-btn
        outlined
        color="#26A69A"
        elevation="1"
        class="my-2 my-sm-5 coleta-btn"
      >Buscar Postos de Coleta</v-btn>
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.inicio-imagem {
  border-radius: 5px;
}
.home-container a{
  text-decoration: none;
}
</style>
