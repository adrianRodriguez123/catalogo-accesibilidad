<template>
    <div><!--https://startbootstrap.com/previews/agency-->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#android">Android</a></li>
                        <li class="nav-item"><a class="nav-link" href="#web">Web</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">¿Eres desarrollador?</div>
                <div class="masthead-heading text-uppercase">¡Bienvenido al catálogo de accesibilidad!</div>
                <router-link :to="{name: 'Principal'}"><a class="btn btn-light btn-lg text-uppercase" href="#">Entra</a></router-link>
            </div>
        </header>

        <section class="page-section" id="android">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Android</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-brands fa-android fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-solid fa-mobile-screen fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Responsive Design</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-brands fa-accessible-icon fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Web Security</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section class="page-section" id="web">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase" style="color:black">Web</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-solid fa-computer-mouse fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-solid fa-desktop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Responsive Design</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-solid fa-universal-access fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Web Security</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
    <!--<div id="catalogoHome">
        <div class="elementoHome primeroPrincipal" style="background-color: #0077bf">
            <div id="elementoHomePrimero">
                <h1>CATÁLOGO DE ACCESIBILIDAD</h1>
                <br>
                <br>
                <p>¿Eres desarrollador? ¡No olvides de realizar tu app o web accesible!</p>
            </div>
        </div>
        <div class="elementoHome">
            <div id="elementoHomeSegundo">
                
                <h3>ANDROID</h3>
                <router-link :to="{name: 'Principal'}">
                    <button class="btn" type="button">Leer</button>
                </router-link>
            
            </div>
        </div>
        <div class="elementoHome" style="background-color: #0077bf">
            <div id="elementoHomeTercero">
                <h3>TEST</h3>
                <router-link :to="{name: 'Principal'}">
                    <button class="btn" type="button">Leer</button>
                </router-link>
        
            </div>
        </div>
    </div>-->
</template>

<script>

import icons from '../assets/js/iconosFontAwesome.js'

export default {
    name: 'Home',
    components: {
    }
}
//Sin esta linea no reconoce bootstrap
window.bootstrap = require('../assets/js/bootstrapBundle.js')


</script>

<style>
@import '../assets/css/home.css';
@import '../assets/css/fuenteMontserrat.css';
@import '../assets/css/fuenteRoboto.css';

/*
#catalogoHome{
    width: 100%;
    height: 2000px;
}

.elementoHome{
    width: 100%;
    height: 300px;
}

.primeroPrincipal{
    position: relative;
}

img{
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: 100%;
}

#elementoHomePrimero{
    position: absolute;
    top: 40%;
    left: 30%;
    text-align: center;
}

#elementoHomeSegundo{
    position: relative;
    top: 20%;
    left: 42%;
    font-size: 30px;
}

#elementoHomeTercero{
    position: relative;
    top: 20%;
    left: 42%;
    font-size: 30px;
}

.btn {
  border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  
  cursor: pointer;
  display: inline-block;
}

.btn:hover {background: #eee;}
*/
</style>