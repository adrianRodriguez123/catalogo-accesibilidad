<template>

  <div id="app">
    <div id="main">
      <div class="nav"></div>
      <div class="contenido">
        <div id="menu">
          <Menu></Menu>
        </div>
        <div id="texto"></div>
      </div>
    </div>
  </div>
  <!--<v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>CATÁLOGO</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="mr-4 primary--text" color="white">ANDROID</v-btn>

      <v-btn class="mr-4 primary--text" color="white">WEB</v-btn>

      <v-btn class="primary--text" color="white">TEST</v-btn>

    </v-app-bar>-->

    <!--https://github.com/tkhquang/vue-simple-accordion-->
  
</template>
<script>
import Menu from "./components/Menu.vue"
export default {
  name: 'App',

  components: {
    Menu
  },

  data(){
    return {
    };
  }
};

</script>

<style>
  #main{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    }

  .nav{
    height: 200px;
    width: 100%;
    background-color: #0077bf;
  }

  .contenido{
    height: 1200px;
    width: 100%;
    border: 4px;
    display: flex;
  }

  #menu{
    height: 100%;
    width: 20%;
    background-color: #0077bf;
  }

  #texto{
    height: 100%;
    width: 80%;
  }
</style>