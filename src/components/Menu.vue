<template>
  <div id="menuMain">

    <div id="android">
      <div class="menuAndroid">
        <v-icon large>
          mdi-chevron-right
        </v-icon>
        ANDROID
      </div>

      <div class="subelementos">
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
      </div>
    </div>
    
    <div id="web">
      <v-icon
        large
      >
        mdi-chevron-right
      </v-icon>
      WEB
    </div>

    <div id="test">
      <v-icon
        large
      >
        mdi-chevron-right
      </v-icon>
      TEST
    </div>

  </div>
</template>

<script>
  const app = new Vue({

  })

  export default {
    name: 'menuVertical',

    data: {
      elementos: [ 
        {nombre: 'Android', 
        listaItems: 'Principios'},
        'Web',
        'Test'
      ]
    },
  }
</script>

<style>
  #menuMain{
    display: flex;
    flex-wrap: wrap;
  }

  #android{
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 30px;
    margin-left: 11px;
    background-color: lightblue;
    margin-bottom: 5px;
  }

  #web{
    display: flex;
    align-items: center;
    width: 90%;
    height: 30px;
    margin-left: 11px;
    background-color: lightblue;
    margin-bottom: 5px;
  }

  #test{
    display: flex;
    align-items: center;
    width: 90%;
    height: 30px;
    margin-left: 11px;
    background-color: lightblue;
  }

  .menuAndroid{
    background-color: tomato;
    width: 100%;
  }

  .subelementos{
    width: 100%;
    height: 0px;
    visibility: hidden;
    background-color: blueviolet;
  }
</style>