<template>
  <div id="menuMain">

    <div id="android" @click="saludar(isOpen)">
      <v-icon large>
        mdi-chevron-right
      </v-icon>
      ANDROID
      <div :class="{subelementos: isOpen}">
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>ADRI</p>
        <p>Hola</p>
        <p>Hola</p>
      </div>
    </div>
    
    <div id="web">
      <v-icon large>
        mdi-chevron-right
      </v-icon>
      WEB
      <div>
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
        isOpen: true //si está a true está escondido
      }
    },
    methods: {
      saludar: function (m) {
        console.log("aaaa "+m);
        if(m){
          console.log("está escondido");
          isOpen = false;
        }
        //console.log(m+" isOpen "+isOpen);
    }
    }
  }

</script>

<style>
  #menuMain{
    border: 2px solid black;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: whitesmoke;
  }

  #android{
    width: 90%;
    max-height: 300px;
    margin-left: 11px;
    background-color: lightblue;
    margin-bottom: 5px;
    cursor: pointer;
    transition: background-color 0.2s linear;
  }

  #android:hover{
    background-color: #91a9b1;
  }

  #web{
    width: 90%;
    max-height: 300px;
    height: 100%;
    margin-left: 11px;
    background-color: lightgreen;
    margin-bottom: 5px;
  }

  #test{
    width: 90%;
    height: 30px;
    margin-left: 11px;
    background-color: lightcoral;
  }

  .subelementos{
    width: 100%;
    max-height: 0;
    overflow: hidden;
    height: 100%;
  }
</style>