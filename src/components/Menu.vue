<template>
  <div id="menuMain">

    <div class="principalesMenu" @click="isOpenAndroid = !isOpenAndroid">
      <v-icon large>
        mdi-chevron-right
      </v-icon>
      ANDROID
    </div>
    <div :class="{subelementos: isOpenAndroid, colorFondo: true}">
      <div class="subelementos2">
        <p class="subelementos3">Hola</p>
        <p class="subelementos3">Hola</p>
        <p class="subelementos3">Hola</p>
        <p class="subelementos3">Hola</p>
        <p class="subelementos3">Hola</p>
      </div>
    </div>
    
    <div class="principalesMenu" @click="isOpenWeb = !isOpenWeb">
      <v-icon large>
        mdi-chevron-right
      </v-icon>
      WEB
      <div :class="{subelementos: isOpenWeb}">
        <div class="subelementos2">
          <p class="subelementos3">Hola</p>
          <p class="subelementos3">Hola</p>
          <p class="subelementos3">Hola</p>
          <p class="subelementos3">Hola</p>
          <p class="subelementos3">Hola</p>
          <p class="subelementos3">Hola</p>
        </div>
      </div>
    </div>

    <div id="test">
      <v-icon large>
        mdi-chevron-right
      </v-icon>
      TEST
    </div>

  </div>
</template>

<script>

  export default {
    name: 'menuVertical',
    data (){
      return{
        isOpenAndroid: true,
        isOpenWeb: true //si está a true está escondido
      }
    },
  }

</script>

<style>
  #menuMain{
    width: 100%;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: #0077bf;
  }

  .principalesMenu{
    width: 90%;
    max-height: 300px;
    margin-left: 11px;
    background-color: lightblue;
    margin-bottom: 5px;
    cursor: pointer;
    transition: background-color 0.2s linear;
  }

  #test{
    width: 90%;
    height: 30px;
    margin-left: 11px;
    background-color: lightblue;
    cursor: pointer;
    transition: background-color 0.2s linear;
  }

  .subelementos{
    width: 100%;
    max-height: 0;
    overflow: hidden;
    height: 100%;
  }

  .subelementos2{
    margin-left: 10%;
  }

  .subelementos3{
    margin-bottom: 5px;
  }

  .subelementos3:hover{
    background-color: whitesmoke;
    display: inline-block;
    cursor: pointer;
  }

  .colorFondo{
    background-color: lightblue;
    width: 90%;
  }
</style>