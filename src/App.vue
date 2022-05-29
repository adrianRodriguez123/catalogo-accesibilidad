<template>
  <v-app>
    <v-app-bar app color="primary" dark>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>CATÁLOGO</v-toolbar-title>

      <!--El atributo temporary indica que se puede deshabilitar el elemento-->
      <v-navigation-drawer app v-model="drawer" temporary>
        <div v-for="(group, name) in groups" :key="group">
          <a @click="group.open = !group.open" v-text="group.name"></a>
          <ul v-show="group.open">
            <li v-for="item in group.items" v-text="item" :key="item"></li>
          </ul>
        </div>
      </v-navigation-drawer>

      <v-spacer></v-spacer>

      <v-btn class="mr-4 primary--text" color="white">ANDROID</v-btn>

      <v-btn class="mr-4 primary--text" color="white">WEB</v-btn>

      <v-btn class="primary--text" color="white">TEST</v-btn>

    </v-app-bar>

  </v-app>
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
  name: 'App',

  data(){
    return {
      drawer: false
    };
  },
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  }
};

var elementos = {
  "ANDROID":{
    "name": "ANDROID",
    "open": false,
    "items": [
      "item 1", "item 1", "item 1", "item 1"
    ]
  },
  "WEB":{
    "name": "ANDROID",
    "open": false,
    "items": [
      "item 2", "item 2", "item 2", "item 2"
    ]
  },
  "TEST":{

  }
}
</script>

<style>
  .letras_nav {
    color: #007bff;
  }
</style>