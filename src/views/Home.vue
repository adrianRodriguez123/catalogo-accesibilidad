<template>
    <div>

        <header class="masthead">
            <div class="container">
                <h1><div class="masthead-subheading">¿Eres desarrollador?</div></h1>
                <div class="masthead-heading text-uppercase">¡Bienvenido al catálogo de accesibilidad!</div>
                <router-link aria-label="Ir a la página principal" :to="{ name: 'Principal'}">Entra</router-link>
            </div>
        </header>

        <section class="page-section" id="android">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-4">
                        <span aria-hidden="true" class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-brands fa-android fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Android</h4>
                        <p>Puedes realizar tu aplicación Android accesible.</p>
                    </div>
                    <div class="col-md-4">
                        <span aria-hidden="true" class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-solid fa-desktop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Web</h4>
                        <p>También puedes hacer tu web accesible.</p>
                    </div>
                    <div class="col-md-4">
                        <span aria-hidden="true" class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-solid fa-universal-access fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Accesibilidad</h4>
                        <p>Si no sabes como aplicar la accesibilidad en Android o en web, aquí puedes aprender.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>

<script>

import icons from '../assets/js/iconosFontAwesome.js'

export default {
    name: 'Home',
    components: {
    },
    methods: {
        irAPrincipal(){
            this.$router.push({ name: 'Principal'});
        },
    },
    created() {
        const html = document.documentElement // returns the html tag
        html.setAttribute('lang', 'es')
    }
}
//Sin esta linea no reconoce bootstrap
window.bootstrap = require('../assets/js/bootstrapBundle.js')



</script>

<style>
@import '../assets/css/home.css';
@import '../assets/css/fuenteMontserrat.css';
@import '../assets/css/fuenteRoboto.css';

</style>