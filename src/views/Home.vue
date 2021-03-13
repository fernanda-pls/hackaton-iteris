<template>
  <v-container class="home-container d-flex flex-column align-center">
    <v-img
      class="inicio-imagem mb-4"
      lazy-src="https://cdn2.iconfinder.com/data/icons/gunther/128/connections-512.png"
      max-height="77"
      max-width="105"
      src="https://cdn2.iconfinder.com/data/icons/gunther/128/connections-512.png"
      alt="Imagem Conecta"
    ></v-img>
    <h2 class="text-h2 text-center mb-3 mt-2">Conecta</h2>
    <p class="text">
      A Conecta é uma plataforma que aproxima os cidadãos dos postos de coleta
      espalhados pelo país. Nossa missão é tornar a reciclagem uma realidade, em
      prol do desenvolvimento sustentável.
    </p>

    <v-img
      class="inicio-imagem mb-4"
      src="https://www.ferrovelhocoradin.com.br/wp-content/uploads/2019/06/Lixeiras.png"
      alt="Imagem Reciclagem"
    ></v-img>
    <h3 class="text-h4 text-left mb-3 mt-6 align-self-start">
      Coleta Seletiva
    </h3>
    <p class="text">
      A Coleta Seletiva é um mecanismo de recolha dos resíduos, os quais são
      classificados de acordo com sua origem e depositados em contentores
      indicados por cores.
    </p>
    <p class="text">
      Ou seja, eles podem ser resíduos orgânicos ou materiais recicláveis como
      papel, pástico, vidro, dentre outros. Além deles, materiais hospitalares e
      radioativos têm um destino diferente.
    </p>
    <v-img
      class="inicio-imagem mb-4"
      lazy-src="https://cdn.iconscout.com/icon/premium/png-256-thumb/easter-egg-2295792-1935442.png"
      max-height="77"
      max-width="105"
      src="https://cdn.iconscout.com/icon/premium/png-256-thumb/easter-egg-2295792-1935442.png"
      alt="Imagem Caseirovos"
    ></v-img>

    <p class="text">
      Os pequenos negócios são responsáveis por 52% dos empregos formais diretos
      no País de acordo com o Sebrae. Boa parte desses profissionais residem
      próximos ao seu local de trabalho, Neste momento em que negócios locais
      estão sendo impactados de forma direta pela crise econômica causada pelo
      Covid-19, um novo e importante diferencial precisa entrar nessa equação: o
      resultado que esse investimento terá no seu entorno.
    </p>
    <p class="text">
      Que tal dar uma moral para o pequeno produtor que tem um negócio perto de
      onde você mora? A <strong>Conecta</strong> traz pra voce a <strong>CaseirOvos</strong> - uma iniciativa de
      empreendedorismo social, seja um 'changemaker', compre pecado em forma de
      Ovos com o delicioso diferencial de ter aquele gostinho de doce da Vó, e
      apoiar a SUA COMUNIDADE!
    </p>

    <router-link to="/ListaColeta">
      <v-btn
        outlined
        color="#26A69A"
        elevation="1"
        class="my-2 my-sm-5 coleta-btn"
        >Postos de Coleta</v-btn
      >
    </router-link>
    <router-link to="/ListaColeta">
      <v-btn
        outlined
        color="#26A69A"
        elevation="1"
        class="my-2 my-sm-5 coleta-btn"
        >CaseirOvos</v-btn
      >
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.inicio-imagem {
  border-radius: 5px;
}
.home-container a {
  text-decoration: none;
}
</style>
