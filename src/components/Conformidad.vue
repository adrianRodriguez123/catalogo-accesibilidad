<template>
    <div>
<!--https://www.bootdey.com/snippets/view/bs4-payment-list-->
    <br>
        <b-tabs content-class="mt-3">
            <b-tab title="Nivel A" active>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr class="align-self-center">
                                                    <th>Requisitos</th>
                                                    <th>Explicación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="elemento in nivelA" :key="elemento.id">
                                                    <td>{{elemento.requisito}}</td>
                                                    <td>{{elemento.explicacion}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>

            <b-tab title="Nivel AA">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr class="align-self-center">
                                                    <th>Requisitos</th>
                                                    <th>Explicación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="elemento in nivelAA" :key="elemento.id">
                                                    <td>{{elemento.requisito}}</td>
                                                    <td>{{elemento.explicacion}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>

            <b-tab title="Nivel AAA">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr class="align-self-center">
                                                    <th>Requisitos</th>
                                                    <th>Explicación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="elemento in nivelAAA" :key="elemento.id">
                                                    <td>{{elemento.requisito}}</td>
                                                    <td>{{elemento.explicacion}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    name: 'conformidad',
    data(){
        return{
            nivelA: [
                {
                    id: 0,
                    requisito: "Contenido no textual",
                    explicacion: "Proporcionar alternativas de texto para el contenido no textual"
                },
                {
                    id: 1,
                    requisito: "Sólo audio y sólo vídeo (pregrabado)",
                    explicacion: "Proporcione una alternativa a los contenidos de sólo vídeo y sólo audio"
                },
                {
                    id: 2,
                    requisito: "Subtítulos (pregrabados)",
                    explicacion: "Proporcionar subtítulos para los vídeos con audio"
                },
                {
                    id: 3,
                    requisito: "Descripción de audio o alternativa multimedia (pregrabada)",
                    explicacion: "El vídeo con audio tiene una segunda alternativa"
                },
                
                {
                    id: 4,
                    requisito: "Información y relaciones",
                    explicacion: "Estructura lógica"
                },
                {
                    id: 5,
                    requisito: "Secuencia significativa",
                    explicacion: "Presentar el contenido en un orden significativo"
                },
                {
                    id: 6,
                    requisito: "Características sensoriales",
                    explicacion: "Utilizar más de un sentido para las instrucciones"
                },
                {
                    id: 7,
                    requisito: "Uso del color",
                    explicacion: "No utilizar una presentación que se base únicamente en el color"
                },
                {
                    id: 8,
                    requisito: "Control del audio",
                    explicacion: "No reproducir el audio automáticamente"
                },
                
                {
                    id: 9,
                    requisito: "Teclado",
                    explicacion: "Accesible sólo con el teclado"
                },
                {
                    id: 10,
                    requisito: "Sin trampa de teclado",
                    explicacion: "No atrapar a los usuarios del teclado"
                },
                {
                    id: 11,
                    requisito: "Tiempo Ajustable",
                    explicacion: "Los límites de tiempo tienen controles de usuario"
                },
                {
                    id: 12,
                    requisito: "Pausa",
                    explicacion: "Proporcionar controles de usuario para mover el contenido"
                },
                {
                    id: 13,
                    requisito: "Tres parpadeos o menos",
                    explicacion: "Ningún contenido parpadea más de tres veces por segundo"
                },
                
                {
                    id: 14,
                    requisito: "Bloqueos de omisión",
                    explicacion: "Proporcionar un enlace 'Saltar al contenido'"
                },
                {
                    id: 15,
                    requisito: "Títulos de página",
                    explicacion: "Utilizar títulos de página útiles y claros"
                },
                {
                    id: 16,
                    requisito: "Orden de enfoque",
                    explicacion: "Orden lógico"
                },

                {
                    id: 17,
                    requisito: "Propósito del enlace (en contexto)",
                    explicacion: "El propósito de cada enlace está claro por su contexto"
                },
                {
                    id: 18,
                    requisito: "Idioma de la página",
                    explicacion: "La página tiene un idioma asignado"
                },
                
                {
                    id: 19,
                    requisito: "On Focus",
                    explicacion: "Los elementos no cambian cuando reciben el foco"
                },
                {
                    id: 20,
                    requisito: "On Input",
                    explicacion: "Los elementos no cambian cuando reciben una entrada"
                },
                {
                    id: 21,
                    requisito: "Identificación de errores",
                    explicacion: "Identificar claramente los errores de entrada"
                },
                {
                    id: 22,
                    requisito: "Etiquetas o instrucciones",
                    explicacion: "Etiquetar elementos y dar instrucciones"
                },
                {
                    id: 23,
                    requisito: "Análisis sintáctico",
                    explicacion: "No hay errores importantes de código"
                },
                {
                    id: 24,
                    requisito: "Nombre, función, valor",
                    explicacion: "Construir todos los elementos para la accesibilidad"
                },
            ],
            nivelAA: [
                {
                    id: 0,
                    requisito: "Subtítulos (en directo)",
                    explicacion: "Los vídeos en directo tienen subtítulos"
                },
                {
                    id: 1,
                    requisito: "Descripción de audio (pregrabada)",
                    explicacion: "Los usuarios tienen acceso a la descripción de audio de los contenidos de vídeo"
                },
                {
                    id: 2,
                    requisito: "Contraste (mínimo)",
                    explicacion: "La relación de contraste entre el texto y el fondo es de al menos 4,5:1"
                },
                {
                    id: 3,
                    requisito: "Redimensionamiento del texto",
                    explicacion: "El texto puede ser redimensionado hasta el 200% sin pérdida de contenido o función"
                },
                
                {
                    id: 4,
                    requisito: "Imágenes del texto",
                    explicacion: "No utilice imágenes del texto"
                },
                {
                    id: 5,
                    requisito: "Vías múltiples",
                    explicacion: "Ofrece varias formas de encontrar las páginas"
                },
                {
                    id: 6,
                    requisito: "Títulos y etiquetas",
                    explicacion: "Utilice títulos y etiquetas claros"
                },
                {
                    id: 7,
                    requisito: "Foco visible",
                    explicacion: "Asegúrese de que el foco del teclado es visible y claro"
                },
                {
                    id: 8,
                    requisito: "Idioma de las partes",
                    explicacion: "Informar a los usuarios cuando el idioma de una página cambia"
                },
                
                {
                    id: 9,
                    requisito: "Navegación coherente",
                    explicacion: "Utilizar los menús de forma coherente"
                },
                {
                    id: 10,
                    requisito: "Identificación coherente",
                    explicacion: "Utilizar iconos y botones de forma coherente"
                },
                {
                    id: 11,
                    requisito: "Sugerencia de errores",
                    explicacion: "Sugiere soluciones cuando los usuarios cometen errores"
                },
                {
                    id: 12,
                    requisito: "Prevención de errores (legales, financieros, de datos)",
                    explicacion: "Reducir el riesgo de errores en la introducción de datos sensibles"
                },
            ],
            nivelAAA: [
                {
                    id: 0,
                    requisito: "Lenguaje de signos (pregrabado)",
                    explicacion: "Proporcionar traducciones al lenguaje de signos para los vídeos"
                },
                {
                    id: 1,
                    requisito: "Descripción de audio ampliada (pregrabada)",
                    explicacion: "Proporcionar una descripción de audio ampliada para los vídeos"
                },
                {
                    id: 2,
                    requisito: "Medios alternativos (pregrabados)",
                    explicacion: "Proporcionar una alternativa de texto a los vídeos"
                },
                {
                    id: 3,
                    requisito: "Sólo audio (en directo)",
                    explicacion: "Proporcionar alternativas para el audio en directo"
                },
                
                {
                    id: 4,
                    requisito: "Contraste (mejorado)",
                    explicacion: "La relación de contraste entre el texto y el fondo es de al menos 7:1"
                },
                {
                    id: 5,
                    requisito: "Audio de fondo bajo o nulo",
                    explicacion: "El audio es claro para que los oyentes lo escuchen"
                },
                {
                    id: 6,
                    requisito: "Presentación visual",
                    explicacion: "Ofrecer a los usuarios una gama de opciones de presentación"
                },
                {
                    id: 7,
                    requisito: "Imágenes de texto (sin excepción)",
                    explicacion: "No utilice imágenes de texto"
                },
                {
                    id: 8,
                    requisito: "Teclado (Sin excepción)",
                    explicacion: "Accesible sólo por teclado, sin excepción"
                },
                
                {
                    id: 9,
                    requisito: "Sin temporización",
                    explicacion: "No hay límites de tiempo"
                },
                {
                    id: 10,
                    requisito: "Interrupciones",
                    explicacion: "No interrumpir a los usuarios"
                },
                {
                    id: 11,
                    requisito: "Reautenticación",
                    explicacion: "Guarda los datos del usuario al reautenticarse"
                },
                {
                    id: 12,
                    requisito: "Tres parpadeos",
                    explicacion: "Ningún contenido parpadea más de tres veces por segundo"
                },
                {
                    id: 13,
                    requisito: "Ubicación",
                    explicacion: "Permita que los usuarios sepan dónde están"
                },
                
                {
                    id: 14,
                    requisito: "Propósito de los enlaces (sólo enlaces)",
                    explicacion: "El propósito de cada enlace está claro en su texto"
                },
                {
                    id: 15,
                    requisito: "Títulos de sección",
                    explicacion: "Divida el contenido con títulos"
                },
                {
                    id: 16,
                    requisito: "Palabras inusuales",
                    explicacion: "Explique cualquier palabra extraña"
                },

                {
                    id: 17,
                    requisito: "Abreviaturas",
                    explicacion: "Explique las abreviaturas"
                },
                {
                    id: 18,
                    requisito: "Nivel de lectura",
                    explicacion: "Los usuarios con nueve años de escuela pueden leer su contenido"
                },
                
                {
                    id: 19,
                    requisito: "Pronunciación",
                    explicacion: "Explique cualquier palabra que sea difícil de pronunciar"
                },
                {
                    id: 20,
                    requisito: "Cambio a petición",
                    explicacion: "No cambies elementos de tu web hasta que los usuarios te lo pidan"
                },
                {
                    id: 21,
                    requisito: "Ayuda",
                    explicacion: "Proporcione ayuda e instrucciones detalladas"
                },
                {
                    id: 22,
                    requisito: "Prevención de errores (todos)",
                    explicacion: "Reduzca el riesgo de todos los errores de entrada"
                },
            ],
        };
    }
}
</script>


<style>
body{
    background:#f5f5f5;
    margin-top:20px;
}
.card {
    border: none;
    -webkit-box-shadow: 1px 0 20px rgba(96,93,175,.05);
    box-shadow: 1px 0 20px rgba(96,93,175,.05);
    margin-bottom: 30px;
}
.table th {
    font-weight: 500;
    color: #827fc0;
}
.table thead {
    background-color: #f3f2f7;
}
.table>tbody>tr>td, .table>tfoot>tr>td, .table>thead>tr>td {
    padding: 14px 12px;
    vertical-align: middle;
}
.table tr td {
    color: #8887a9;
}
.thumb-sm {
    height: 32px;
    width: 32px;
}
.badge-soft-warning {
    background-color: rgba(248,201,85,.2);
    color: #f8c955;
}

.badge {
    font-weight: 500;
}
.badge-soft-primary {
    background-color: rgba(96,93,175,.2);
    color: #605daf;
}
</style>