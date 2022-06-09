<template>
  <div id="menuMain">

    <div id="android">
      <div class="menuAndroid">
        <v-icon large>
          mdi-chevron-right
        </v-icon>
        ANDROID

        <div class="contenidoMenu">
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

      
    </div>
    
    <div id="web">
      <v-icon
        large
      >
        mdi-chevron-right
      </v-icon>
      WEB
      <div class="contenidoMenu">
        <p>gfd</p>
        <p>asd</p>
        <p>Adios</p>
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
        <p>Adios</p>
      </div>
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
  }

  #android{
    width: 90%;
    height: 30px;
    margin-left: 11px;
    background-color: lightblue;
    margin-bottom: 5px;
  }

  #web{
    width: 90%;
    height: 30px;
    margin-left: 11px;
    background-color: lightblue;
    margin-bottom: 5px;
  }

  #test{
    width: 90%;
    height: 30px;
    margin-left: 11px;
    background-color: lightblue;
  }

  .menuAndroid{
    background-color: tomato;
    width: 100%;
  }

  .contenidoMenu{
    width: 100%;
    height: 300px;
    overflow-y: hidden;
    background-color: blueviolet;
  }
</style>