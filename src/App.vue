<template>
  <v-app>
    <v-app-bar app color="primary" dark>

      

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>CÁTALOGO</v-toolbar-title>

      <v-navigation-drawer app v-model="drawer" temporary>
        
      </v-navigation-drawer>

      <v-spacer></v-spacer>

      <v-btn class="">ANDROID</v-btn>
      <v-btn>WEB</v-btn>
      <v-btn>REALIZA TU TEST</v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return {
      drawer: false
    };
  },
};
</script>
