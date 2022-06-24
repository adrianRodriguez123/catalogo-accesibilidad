<template>
    <div id="catalogoHome">
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
    </div>
</template>


<style>
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

</style>