<template>
  <div><!--https://startbootstrap.com/previews/sb-admin-->
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <!-- Navbar Brand-->
            <a class="navbar-brand ps-3" href="/">Catálogo</a>
            <!-- Sidebar Toggle-->
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
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
                            <div class="sb-sidenav-menu-heading">Elementos</div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePrincipios" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Principios
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <!--TODO https://getbootstrap.com/docs/4.0/components/navs/#regarding-accessibility-->
                            <div class="collapse" id="collapsePrincipios" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <router-link :to="'/principal/perceptible'"><a class="nav-link" @click="toggleActive(0)" :class="{marcado: activeIndex==0}" href="#">Perceptible</a></router-link>
                                    <router-link :to="'/principal/operable'"><a class="nav-link" @click="toggleActive(1)" :class="{marcado: activeIndex==1}" href="#">Operable</a></router-link>
                                    <router-link :to="'/principal/entendible'"><a class="nav-link" @click="toggleActive(2)" :class="{marcado: activeIndex==2}" href="#">Entendible</a></router-link>
                                    <router-link :to="'/principal/robusto'"><a class="nav-link" @click="toggleActive(3)" :class="{marcado: activeIndex==3}" href="#">Robusto</a></router-link>
                                </nav>
                            </div>

                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseConformidad" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Conformidad
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>

                            <div class="collapse" id="collapseConformidad" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="#">Nivel A</a>
                                    <a class="nav-link" href="#">Nivel AA</a>
                                    <a class="nav-link" href="#">Nivel AAA</a>
                                </nav>
                            </div>

                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Herramientas
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                        </div>
                    </div>
                    
                </nav>
            </div>
            <div id="layoutSidenav_content">
              <div class="container-fluid px-4">
                <h1 class="mt-4"></h1>
                <b-tabs content-class="mt-3">
                  <!-- TODO https://es.vuejs.org/v2/style-guide/#Evitar-v-if-con-v-for-esencial-->
                  <!--https://getbootstrap.com/docs/5.0/components/accordion/-->
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
                    <div class="accordion" id="accordionExample">

                      <div v-for="textoIndividual in principioElegido($route.params.prin, web)" :key="textoIndividual.id">
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
                </b-tabs>
                  
              </div>
                
            </div>
        </div>
  </div>
<!--
  <div id="app">
    <div id="main">
      <div class="nav">
        <Nav></Nav>
      </div>
      <div class="contenido">
          <div id="menuApp">
            <Menu></Menu>
          </div>
          <div id="textoApp">
            <Texto></Texto>
          </div>
      </div>
    </div>
  </div>-->
</template>

<script>
import Menu from "../components/Menu.vue"
import Texto from "../components/Texto.vue"
import Nav from "../components/Nav.vue"
import icons from '../assets/js/iconosFontAwesome.js'
import scripts from '../assets/js/scriptsPrincipal.js'
import bootstrapBundle from '../assets/js/bootstrapBundle.js'
import MixinSearch from '../mixinsSearch.js'

export default {
  name: 'App',
  mixins: [MixinSearch],
  components: {
    Menu,
    Texto,
    Nav
  },
  data(){
    return {
      activeIndex: null,
      isMarcado: false,
      android: "android",
      web: "web"
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
/*
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
  */
</style>