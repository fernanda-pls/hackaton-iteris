<template>
  <v-container class="container">
     <v-img
      lazy-src="https://cdn.iconscout.com/icon/premium/png-256-thumb/easter-egg-2295792-1935442.png"
      max-height="80"
      max-width="105"
      class="rec-img"
      src="https://cdn.iconscout.com/icon/premium/png-256-thumb/easter-egg-2295792-1935442.png"
    ></v-img>
    <h2 class="text-h5 text-center mb-3 mt-6">Ovos de Páscoa</h2>

    <p class="text-center">Escolha os produtores de ovos de Páscoa caseiros de acordo com a sua cidade:</p>

    <v-row>
       <v-card
        v-for="ovo in OvosPascoa" 
        :key="ovo.nome"
        class="mx-auto my-12"
        max-width="374"
        dark
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          :src="ovo.imagem"
        ></v-img>

        <v-card-title class="pt-5 pb-2">{{ ovo.nome }}</v-card-title>

        <v-card-text class="my-0 px-4">
          <div><span class="font-weight-bold">Endereço:</span> {{ ovo.local.endereco }}</div>
          <div><span class="font-weight-bold">Local:</span> {{ ovo.local.nome }}</div>
          <div><span class="font-weight-bold">Sabor:</span> {{ ovo.sabor }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-card-text class="text-right preço text--white">
            R$ {{ ovo.preco }}
          </v-card-text>
        </v-card-actions>
      </v-card>
    </v-row>

    

  </v-container>
</template>

<script>
export default {
  name: "Ovos",
  data() {
    return {
      OvosPascoa: []
    }
  },
  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then(resposta => resposta.json())
      .then(json => {
        this.OvosPascoa = json;
      });
  }
};
</script>

<style scoped>
  .preço {
    font-size: 1.3rem;
  }
  .rec-img{
    margin-left: 120px;
  }
  .comprar-btn {
    margin: 0 0.5rem;
  }
.container a {
  text-decoration: none;
}
</style>