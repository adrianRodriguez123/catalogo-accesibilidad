<template>
    <div>
      <!--https://www.bootdey.com/snippets/view/light-user-list-->
        <br>
        <p>Estas son algunas herramientas que nos podemos encontrar para realizar el testing de la accesibilidad de nuestra app Android o web.</p>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<div class="container mt-3 mb-4">
<div class="col-lg-9 mt-4 mt-lg-0">
    <div class="row">
      <div class="col-md-12">
        <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
          <table class="table manage-candidates-top mb-0">
            <thead>
              <tr>
                <th>Test de accesibilidad de Google</th>
              </tr>
            </thead>
            <tbody>
              <tr class="candidates-list">
                <td class="title">
                  <div class="thumb imagenHerramienta">
                    <img class="img-fluid" src="../../public/imagenes/talkback.jpg" alt="Logotipo talkback">
                  </div>
                  <div class="candidate-list-details">
                    <div class="candidate-list-info">
                      <div class="candidate-list-title">
                        <p>Es una aplicación para Android, y se encarga de ayudar a personas con discapacidad intelectual a interactuar con sus dispositivos.
                            Este es el enlace para descargarla, aunque viene preinstalada: <a href="https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&hl=es&gl=US">Test de accesibilidad de Google</a>
                            
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>

            <br>
            <thead class="tablaHerramientas">
              <tr>
                <th>Wave</th>
              </tr>
            </thead>

            <tbody>
              <tr class="candidates-list">
                <td class="title">
                  <div class="thumb imagenHerramienta">
                    <img class="img-fluid" src="../../public/imagenes/wavelogo.jpg" alt="Logotipo wave">
                  </div>
                  <div class="candidate-list-details">
                    <div class="candidate-list-info">
                      <div class="candidate-list-title">
                        <p>Wave es un conjunto de herramientas que ayuda a los desarrolladores a hacer su web accesible. Proporciona una API, con la cual se pueden realizar peticiones
                            e integrarlos en diferentes herramientas. También dispone de extensiones para el navegador. Podemos encontrarla aquí: <a href="https://wave.webaim.org/">Wave</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>

            <br>
            <thead class="tablaHerramientas">
              <tr>
                <th>Tawdis</th>
              </tr>
            </thead>

            <tbody>
              <tr class="candidates-list">
                <td class="title">
                  <div class="thumb imagenHerramienta">
                    <img class="img-fluid" src="../../public/imagenes/logotawdis.png" alt="Logotipo tawdis">
                  </div>
                  <div class="candidate-list-details">
                    <div class="candidate-list-info">
                      <div class="candidate-list-title">
                        <p>Esta es una herramienta para la accesibilidad web. Nos ofrece varios servicios, uno de ellos resulta bastante interesante. Es un servicio online para revisar
                            la accesibilidad de una determinada URL. La podemos encontrar aquí: <a href="https://www.tawdis.net/index">Tawdis</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>

            <br>
            <thead class="tablaHerramientas">
              <tr>
                <th>Accessibility Developer Tools</th>
              </tr>
            </thead>

            <tbody>
              <tr class="candidates-list">
                <td class="title">
                  <div class="thumb imagenHerramienta">
                    <img class="img-fluid" src="../../public/imagenes/accessibilityDeveloper.jpg" alt="Logotipo accessibility developer tools">
                  </div>
                  <div class="candidate-list-details">
                    <div class="candidate-list-info">
                      <div class="candidate-list-title">
                        <p>Es una extensión de Google Chrome para realizar auditoría de accesibilidad web. Los resultados nos lo devuelven como un informe donde nos indica los errores violados en cuanto a
                            la accesibilidad. La podemos encontrar aquí: <a href="https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en">Accessibility Developer Tools</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<style>
body{
    background-color: #f8f9fa!important
}
/*
img{
    width: 100%;
}*/

.imagenHerramienta{
    flex-shrink: 0;
}

.table > :not(:first-child), .dataTable-table > :not(:first-child) {
    border-top: 0px !important;
}

.p-4 {
    padding: 1.5rem!important;
}
.mb-0, .my-0 {
    margin-bottom: 0!important;
}
.shadow-sm {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}    

/* user-dashboard-info-box */
.user-dashboard-info-box .candidates-list .thumb {
    margin-right: 20px;
}
.user-dashboard-info-box .candidates-list .thumb img {
    width: 80px;
    height: 80px;
    -o-object-fit: cover;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
}

.user-dashboard-info-box .title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 30px 0;
}

.user-dashboard-info-box .candidates-list td {
    vertical-align: middle;
}

.user-dashboard-info-box td li {
    margin: 0 4px;
}

.user-dashboard-info-box .table thead th {
    border-bottom: none;
}

.table.manage-candidates-top th {
    border: 0px;
}

.user-dashboard-info-box .candidate-list-favourite-time .candidate-list-favourite {
    margin-bottom: 10px;
}

.table.manage-candidates-top {
    min-width: 650px;
}

.user-dashboard-info-box .candidate-list-details ul {
    color: #969696;
}

/* Candidate List */
.candidate-list {
    background: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 0px solid #eeeeee;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.candidate-list:hover {
    -webkit-box-shadow: 0px 0px 34px 4px rgba(33, 37, 41, 0.06);
    box-shadow: 0px 0px 34px 4px rgba(33, 37, 41, 0.06);
    position: relative;
    z-index: 99;
}
.candidate-list:hover a.candidate-list-favourite {
    color: #e74c3c;
    -webkit-box-shadow: -1px 4px 10px 1px rgba(24, 111, 201, 0.1);
    box-shadow: -1px 4px 10px 1px rgba(24, 111, 201, 0.1);
}

.candidate-list .candidate-list-image {
    margin-right: 25px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80px;
    flex: 0 0 80px;
    border: none;
}
.candidate-list .candidate-list-image img {
    width: 80px;
    height: 80px;
    -o-object-fit: cover;
    object-fit: cover;
}

.candidate-list-title {
    margin-bottom: 5px;
}

.candidate-list-details ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 0px;
}
.candidate-list-details ul li {
    margin: 5px 10px 5px 0px;
    font-size: 13px;
}

.candidate-list .candidate-list-favourite-time {
    margin-left: auto;
    text-align: center;
    font-size: 13px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 90px;
    flex: 0 0 90px;
}
.candidate-list .candidate-list-favourite-time span {
    display: block;
    margin: 0 auto;
}
.candidate-list .candidate-list-favourite-time .candidate-list-favourite {
    display: inline-block;
    position: relative;
    height: 40px;
    width: 40px;
    line-height: 40px;
    border: 1px solid #eeeeee;
    border-radius: 100%;
    text-align: center;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-bottom: 20px;
    font-size: 16px;
    color: #646f79;
}
.candidate-list .candidate-list-favourite-time .candidate-list-favourite:hover {
    background: #ffffff;
    color: #e74c3c;
}

.candidate-banner .candidate-list:hover {
    position: inherit;
    -webkit-box-shadow: inherit;
    box-shadow: inherit;
    z-index: inherit;
}

.bg-white {
    background-color: #ffffff !important;
}
.p-4 {
    padding: 1.5rem!important;
}
.mb-0, .my-0 {
    margin-bottom: 0!important;
}
.shadow-sm {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.user-dashboard-info-box .candidates-list .thumb {
    margin-right: 20px;
}
</style>