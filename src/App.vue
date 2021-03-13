<template>
  <v-app :style="myStyle">
    <AppTopBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<script>
import AppTopBar from "./components/shared/AppTopBar";

export default {
  name: "App",
  data() {
    return {
      myStyle: { backgroundColor: "#EEE" }
    };
  },
  components: {
    AppTopBar
  }
};
</script>

<style lang="scss">
</style>
