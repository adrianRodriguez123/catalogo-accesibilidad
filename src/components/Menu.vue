<template>
  <div id="menuMain">

    <div class="principalesMenu" @click="isOpenAndroid = !isOpenAndroid">
      <v-icon large>
        mdi-chevron-right
      </v-icon>
      ANDROID
    
      <div :class="{subelementos: isOpenAndroid}">
        <div class="subelementos2">
          <p v-scroll-to="'#apps'" class="subelementos3" @click="menuClick('android')">Principios</p>
          <p class="subelementos3" @click="menuClick('android')">Requisitos y recomendaciones</p>
          <p class="subelementos3" @click="menuClick('android')">Casos especiales</p>
          <p class="subelementos3" @click="menuClick('android')">Textos hard-coded</p>
          <p class="subelementos3" @click="menuClick('android')">Internacionalización de los números</p>
          <p class="subelementos3" @click="menuClick('android')">Internacionalización de las fechas</p>
          <p class="subelementos3" @click="menuClick('android')">Tecnologías de apoyo</p>
          <p class="subelementos3" @click="menuClick('android')">Jerarquía</p>
          <p class="subelementos3" @click="menuClick('android')">Colores y contrase</p>
          <p class="subelementos3" @click="menuClick('android')">Layouts y tipografía</p>
          <p class="subelementos3" @click="menuClick('android')">Strings</p>
          <p class="subelementos3" @click="menuClick('android')">Imágenes</p>
          <p class="subelementos3" @click="menuClick('android')">Sonidos y movimiento</p>
          <p class="subelementos3" @click="menuClick('android')">Apps</p>
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
          <p class="subelementos3" @click="menuClick('web')">Perceptible</p>
          <p class="subelementos3" @click="menuClick('web')">Operable</p>
          <p class="subelementos3" @click="menuClick('web')">Comprensible</p>
          <p class="subelementos3" @click="menuClick('web')">Robusto</p>
          <p class="subelementos3" @click="menuClick('web')">Conformidad</p>
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
<script src="https://cdn.jsdelivr.net/npm/vue-scrollto"></script>
<script>

  export default {
    name: 'menuVertical',
    data (){
      return{
        isOpenAndroid: true,
        isOpenWeb: true //si está a true está escondido
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
    }
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
</style>