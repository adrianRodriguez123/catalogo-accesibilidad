<template>
  <div id="menuMain">

    <div class="principalesMenu" @click="isOpenAndroid = !isOpenAndroid">
      <v-icon large>
        mdi-chevron-right
      </v-icon>
      ANDROID
    
      <div :class="{subelementos: isOpenAndroid}">
        <div class="subelementos2">
          <p v-scroll-to="'#principio'" class="subelementos3" @click="menuClick('android')">Principios</p>
          <p v-scroll-to="'#requisitos'" class="subelementos3" @click="menuClick('android')">Requisitos y recomendaciones</p>
          <p v-scroll-to="'#especial'" class="subelementos3" @click="menuClick('android')">Casos especiales</p>
          <p v-scroll-to="'#hardcoded'" class="subelementos3" @click="menuClick('android')">Textos hard-coded</p>
          <p v-scroll-to="'#numero'" class="subelementos3" @click="menuClick('android')">Internacionalización de los números</p>
          <p v-scroll-to="'#fecha'" class="subelementos3" @click="menuClick('android')">Internacionalización de las fechas</p>
          <p v-scroll-to="'#apoyo'" class="subelementos3" @click="menuClick('android')">Tecnologías de apoyo</p>
          <p v-scroll-to="'#jerarquia'" class="subelementos3" @click="menuClick('android')">Jerarquía</p>
          <p v-scroll-to="'#color'" class="subelementos3" @click="menuClick('android')">Colores y contrase</p>
          <p v-scroll-to="'#layout'" class="subelementos3" @click="menuClick('android')">Layouts y tipografía</p>
          <p v-scroll-to="'#strings'" class="subelementos3" @click="menuClick('android')">Strings</p>
          <p v-scroll-to="'#imagenes'" class="subelementos3" @click="menuClick('android')">Imágenes</p>
          <p v-scroll-to="'#sonidos'" class="subelementos3" @click="menuClick('android')">Sonidos y movimiento</p>
          <p v-scroll-to="'#apps'" class="subelementos3" @click="menuClick('android')">Apps</p>
        </div>
      </div>
    </div>
    
    <div class="principalesMenu" @click="isOpenWeb = !isOpenWeb">
      <v-icon large>
        mdi-chevron-right
      </v-icon>
      WEB
      <div :class="{subelementos: isOpenWeb}">
        <div class="subelementos2">
          <p v-scroll-to="'#perceptible'" class="subelementos3" @click="menuClick('web')">Perceptible</p>
          <p v-scroll-to="'#operable'" class="subelementos3" @click="menuClick('web')">Operable</p>
          <p v-scroll-to="'#comprensible'" class="subelementos3" @click="menuClick('web')">Comprensible</p>
          <p v-scroll-to="'#robusto'" class="subelementos3" @click="menuClick('web')">Robusto</p>
          <p v-scroll-to="'#conformidad'" class="subelementos3" @click="menuClick('web')">Conformidad</p>
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
import axios from "axios";
  export default {
    name: 'menuVertical',
    data (){
      return{
        isOpenAndroid: true,
        isOpenWeb: true,//si está a true está escondido
        info: null
      }
    },
    methods: {
      menuClick: function(texto){
        if(texto === 'android'){
          document.getElementById("textoAndroidPrincipal").style.display = "inline";
          document.getElementById("textoWebPrincipal").style.display = "none";
        }else if(texto === 'web'){
          document.getElementById("textoAndroidPrincipal").style.display = "none";
          document.getElementById("textoWebPrincipal").style.display = "inline";
        }
      }
    },//https://codingpotions.com/vue-axios
    created() {
        axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {console.log(response)})
    },
  }

</script>

<style>
  #menuMain{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: #0077bf;
  }

  .principalesMenu{
    width: 90%;
    max-height: 500px;
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
    margin-left: 14%;
  }

  .subelementos3{
    margin-bottom: 5px;
  }

  .subelementos3:hover{
    background-color: whitesmoke;
    display: inline-block;
    cursor: pointer;
  }

  #prueba{
    position: absolute;
    bottom: -551px;
    
  }
</style>