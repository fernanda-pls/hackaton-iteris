<template>
  <div class="app-top-bar">
    <v-app-bar color="#a5c9fd" app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>CONECTA</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          class="background-color: #ccc"
          active-class="blue--text text--lighten-1"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-transit-connection-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Conecta</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/ListaColeta">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-recycle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Postos de Coleta</v-list-item-title>
            </v-list-item>

          </router-link>
           <router-link to="/Ovos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-egg-easter</v-icon>
              </v-list-item-icon>
              <v-list-item-title>CaseirOvos</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null
  })
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}
</style>
