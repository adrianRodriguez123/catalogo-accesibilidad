<template>
  <div><!--https://startbootstrap.com/previews/sb-admin-->
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <!-- Navbar Brand-->
            <a class="navbar-brand ps-3" href="index.html">Catálogo</a>
            <!-- Sidebar Toggle-->
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input v-model="search" class="form-control" type="text" placeholder="Buscar..." aria-label="Buscar..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
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
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Perceptible
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>

                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Operable
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>

                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Entendido
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Robusto
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>

                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Conformidad
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
                          <b-tab title="Android" active>
                            <div v-for="textoIndividual in filteredSearch" :key="textoIndividual.id">
                              <texto :textoComponente="textoIndividual"></texto>
                            </div>

                            <b-pagination
                              v-model="currentPage"
                              :per-page="perPage"
                              :total-rows="3"
                              aria-controls="mainTexto">
                            </b-pagination>
                          
                          </b-tab>

                          <b-tab title="Web">
                            
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

  data() {
    return {
      perPage: 3,
      currentPage: 1,

    }
  }
};

</script>

<style>

@import '../assets/css/datatables.css';
@import '../assets/css/principal.css';
@import '../assets/css/fuenteMontserrat.css';
@import '../assets/css/fuenteRoboto.css';
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