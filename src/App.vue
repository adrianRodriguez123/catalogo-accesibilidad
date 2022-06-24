<template>

  <div id="app">
    <div id="main">
      <div class="nav"></div>
      <div class="contenido">
          <div id="menuApp">
            <Menu></Menu>
          </div>
          <div id="textoApp">
            <Texto></Texto>
          </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import Menu from "./components/Menu.vue"
import Texto from "./components/Texto.vue"

export default {
  name: 'App',

  components: {
    Menu,
    Texto
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
    height: 2500px;
    width: 100%;
    display: flex;
  }

  #menuApp{
    height: 100%;
    width: 20%;
    background-color: #0077bf;
  }

  #textoApp{
    height: 100%;
    width: 80%;
  }
</style>