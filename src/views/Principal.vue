<template>
  <div><!--https://startbootstrap.com/previews/sb-admin-->
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <!-- Navbar Brand-->
            <a aria-label="Volver a la página de bienvenida" class="navbar-brand ps-3" href="/catalogo-accesibilidad">Catálogo</a>
            <!-- Sidebar Toggle-->
            <!--<button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>-->
            <!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
              <div class="input-group">
                <input v-model="search" class="form-control" type="text" placeholder="Buscar..." aria-label="Buscar..." aria-describedby="btnNavbarSearch" />
              </div>
            </form>
            <!-- Navbar-->
            
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <h1 style="color: white;padding: 1.75rem 1rem 0.75rem;font-size: 0.75rem;font-weight: bold; text-transform: uppercase;">Elementos</h1>
                            <a aria-label="Principios" style="color: white" class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePrincipios" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Principios
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePrincipios" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <router-link :to="'/principal/perceptible'"><a aria-label="Perceptible" style="color: white" class="nav-link" @click="toggleActive(0);elementoSeleccionado('principio')" :class="{marcado: activeIndex==0}" href="#">Perceptible</a></router-link>
                                    <router-link :to="'/principal/operable'"><a aria-label="Operable" style="color: white" class="nav-link" @click="toggleActive(1);elementoSeleccionado('principio')" :class="{marcado: activeIndex==1}" href="#">Operable</a></router-link>
                                    <router-link :to="'/principal/entendible'"><a aria-label="Entendible" style="color: white" class="nav-link" @click="toggleActive(2);elementoSeleccionado('principio')" :class="{marcado: activeIndex==2}" href="#">Entendible</a></router-link>
                                    <router-link :to="'/principal/robusto'"><a aria-label="Robusto" style="color: white" class="nav-link" @click="toggleActive(3);elementoSeleccionado('principio')" :class="{marcado: activeIndex==3}" href="#">Robusto</a></router-link>
                                </nav>
                            </div>

                            <a aria-label="Conformidad" style="color: white" class="nav-link collapsed" href="#" data-bs-toggle="collapse" @click="toggleActive(4);elementoSeleccionado('conformidad')" :class="{marcado: activeIndex==4}" data-bs-target="#collapseConformidad" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="far fa-thumbs-up"></i></div>
                                Conformidad
                                <!--<div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>-->
                            </a>

                            <a aria-label="Herramientas" style="color: white" class="nav-link collapsed" href="#" data-bs-toggle="collapse" @click="toggleActive(5);elementoSeleccionado('herramienta')" :class="{marcado: activeIndex==5}" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                                Herramientas
                            </a>

                            <a aria-label="Quién soy" style="color: white" class="nav-link collapsed" href="#" data-bs-toggle="collapse" @click="toggleActive(6);elementoSeleccionado('quien')" :class="{marcado: activeIndex==6}" data-bs-target="#collapseQuienes" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fa-brands fa-readme"></i></div>
                                ¿Quién soy?
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
              <main>
              <div class="container-fluid px-4" v-if="componenteActivoPrincipios">
                <h1 class="mt-4"></h1>
                <b-tabs content-class="mt-3">
                  <b-tab title="Android" active>
                    <div class="accordion" id="accordionExample">

                      <div v-for="textoIndividual in principioElegido($route.params.prin, android)" :key="textoIndividual.id">
                        <div class="accordion-item">
                          <h2 class="accordion-header" :id="['titulo' + textoIndividual.id]">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="['#contenido' + textoIndividual.id]" aria-expanded="false" :aria-controls="['#contenido' + textoIndividual.id]">
                              {{textoIndividual.subtitulo}}
                            </button>
                          </h2>
                          <div :id="['contenido' + textoIndividual.id]" class="accordion-collapse collapse" :aria-labelledby="['titulo' + textoIndividual.id]" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <texto :textoComponente="textoIndividual"></texto>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </b-tab>

                  <b-tab title="Web">
                    <div class="accordion" id="accordionExample2">

                      <div v-for="textoIndividual in principioElegido($route.params.prin, web)" :key="textoIndividual.id">
                        <div class="accordion-item">
                          <h2 class="accordion-header" :id="['titulo' + textoIndividual.id]">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="['#contenido' + textoIndividual.id]" aria-expanded="false" :aria-controls="['#contenido' + textoIndividual.id]">
                              {{textoIndividual.subtitulo}}
                            </button>
                          </h2>
                          <div :id="['contenido' + textoIndividual.id]" class="accordion-collapse collapse" :aria-labelledby="['titulo' + textoIndividual.id]" data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                              <texto :textoComponente="textoIndividual"></texto>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </b-tab>
                </b-tabs>
                  
              </div>
              <div class="container-fluid px-4" v-if="componenteActivoConformidad">
                <Conformidad></Conformidad>
              </div>

              <div class="container-fluid px-4" v-if="componenteActivoHerramientas">
                <Herramienta></Herramienta>
              </div>

              <div class="container-fluid px-4" v-if="componenteActivoQuien">
                <Quien></Quien>
              </div>

              
              </main>
            </div>
        </div>
  </div>
</template>

<script>
import Texto from "../components/Texto.vue"
import Conformidad from "../components/Conformidad.vue"
import Herramienta from "../components/Herramientas.vue"
import Quien from "../components/Quienes.vue"
import icons from '../assets/js/iconosFontAwesome.js'
import scripts from '../assets/js/scriptsPrincipal.js'
import bootstrapBundle from '../assets/js/bootstrapBundle.js'
import Search_Data from '../search_data.js'

export default {
  name: 'App',
  mixins: [Search_Data],
  components: {
    Texto,
    Conformidad,
    Herramienta,
    Quien
    
  },
  data(){
    return {
      activeIndex: null,
      isMarcado: false,
      android: "android",
      web: "web",
      componenteActivoPrincipios: true,
      componenteActivoConformidad: false,
      componenteActivoHerramientas: false,
      componenteActivoQuien: false
            
    }
  },
  computed: {
      filteredSearch() {
        return this.textos.filter((text) =>
          text.textoMostrado.toLowerCase().includes(this.search.toLowerCase())
        );
      }
  },
  methods: {
    principioElegido(e, tech) {//El método recibe el valor de la ruta
      return this.filteredSearch.filter(function (textoIndividual){
        if(textoIndividual.titulo === e && textoIndividual.tech === tech){
          return textoIndividual
        }
      })
    },

    //Método para activar o desactivar el fondo que se muestra al hacer click en un elemento del menú
    toggleActive(index){
      this.activeIndex = index;
    },

    elementoSeleccionado(comp){
      if(comp=="quien"){
        this.componenteActivoPrincipios = false;
        this.componenteActivoConformidad = false;
        this.componenteActivoHerramientas = false;
        this.componenteActivoQuien = true;

      }else if(comp=="herramienta"){
        this.componenteActivoPrincipios = false;
        this.componenteActivoConformidad = false;
        this.componenteActivoHerramientas = true;
        this.componenteActivoQuien = false;

      }else if(comp=="conformidad"){
        this.componenteActivoPrincipios = false;
        this.componenteActivoConformidad = true;
        this.componenteActivoHerramientas = false;
        this.componenteActivoQuien = false;

      }else if(comp=="principio"){
        this.componenteActivoPrincipios = true;
        this.componenteActivoConformidad = false;
        this.componenteActivoHerramientas = false;
        this.componenteActivoQuien = false;
      }
       
    }
  },//Con el watch podemos controlar lo que ocurre al cambiar de ruta
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.principioElegido(toParams.prin)
      }
    );
  },

};

</script>

<style>

@import '../assets/css/datatables.css';
@import '../assets/css/principal.css';
@import '../assets/css/fuenteMontserrat.css';
@import '../assets/css/fuenteRoboto.css';

.marcado{
  background-color: rgb(72, 77, 87);
}
</style>