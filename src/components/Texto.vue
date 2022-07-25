<template>
    <div id="mainTexto">
        <!--<h3>{{ textoComponente.titulo }}</h3>-->
        <p v-html="textoComponente.textoMostrado">{{textoComponente.textoMostrado}}</p>
        
        
        
        <!--<div id="textoAndroidPrincipal">
            <div class="texto">
                <h1 id="principio">Principios</h1>
                <p>
                    <ul style="margin-left: 15px">
                        <li>Claridad: El diseño de las interfaces debe de ser claro y además con diferentes maneras para realizar cada acción.</li>
                        <li>Robustez: Diseñar tu app para que el máximo número de usuarios pueda usarla.</li>
                        <li>Específica: Soportar tecnologías de apoyo, que son las que mejoran las capacidades funcionales de las personas mediante lectores de pantalla, herramientas de aumento y audífonos.</li>
                    </ul>
                </p>
            </div>

            <div class="texto">
                <h1 id="requisitos">Requisitos y recomendaciones</h1>
                <p>
                    Para que la app tenga un mínimo nivel de accesibilidad debe cumplir las siguientes pautas:
                    <br><br>
                    <ul style="margin-left: 15px">
                        <li>
                            Describir las interfaces de control usuario: Utilizar descripciones de contenido para los componentes de la interfaz que tienen texto visible 
                            como por ejemplo ImageButton, ImageView y CheckBox. Se puede indicar con el atributo en XML con Android:contentDescription o con el método setContentDescription(CharSequence).
                        </li>
                        <li>
                            Habilitar la navegación con enfoque: Es necesario asegurarse de que los usuarios puedan navegar por toda la interfaz de la pantalla usando controles 
                            direccionales basados en software o en hardware.
                        </li>
                        <li>
                            Controles de vista personalizados: Es importante implementar interfaces de accesibilidad para las views personalizadas.
                        </li>
                        <li>
                            Que no haya solo feedback de audio: Siempre debe haber un segundo mecanismo de feedback para aquellos usuarios que tengan problemas de audición.
                        </li>
                        <li>
                            Testear: Para testear la accesibilidad se puede hacer con controles direccionales y usando la aplicación de Android Talkback.
                        </li>
                    </ul>
                    <br>
                    Para que la app tenga una calidad respecto a la accesibilidad se recomiendan las siguientes indicaciones:
                    <br><br>
                    <ul style="margin-left: 15px">
                        <li>
                            Guías de accesibilidad oficiales de Android: Se debe hacer uso de las guías oficiales de Android https://developer.android.com/guide/topics/ui/accessibility.
                        </li>
                        <li>
                            Controles proporcionados por el framework: Android dispone de controles de interfaz de usuario integrados, ya que estos controles ya ofrecen un soporte a la accesibilidad.
                        </li>
                        <li>
                            Evitar controles de usuario temporales: Hay que evitar tener controles de interfaz de usuario que desaparezcan con el tiempo.
                        </li>
                    </ul>
                </p>
            </div>

            <div class="texto">
                <h1 id="especial">Casos especiales</h1>
                <p>
                    Existen algunas situaciones donde se deben de tomar medidas diferentes para garantizar la accesibilidad de una aplicación.
                    <br><br>
                    <ul>
                        <li>Ayudas en campos de texto: Para los campos de texto EditText, se puede utilizar el atributo 'android:hint' para ayudar a las usuarios a entender que es lo que se tiene que escribir en ese campo y también para permitir que se puede dictar por voz cuando se complete el campo.</li>
                        <li>Controles personalizados con alto contexto visual: Usando la clase AccesibilityNodeProvider, podemos proporcionar una jerarquía de vista virtual para aquellos controles de usuario con mucho contexto visual, como, por ejemplo, un calendario.</li>
                        <li>Controles personalizados y manejo de los clicks: Si un elemento de tu app realiza alguna acción que requiera de una interacción del usuario, como por ejemplo un click, un drag and drop, etc, se deberá usar un evento accesible equivalente, mediante la clase AccessibilityEvent.</li>
                        <li>Controles que cambian las funciones: Si existen elementos o controles que cambian algunas funciones, como puede ser un botón que pasa de “Play” a “Pause” se tendrá que proporcionar un android:contentDescription apropiado.</li>
                        <li>Alerta para controles relacionados: Es necesario asegurarse que los controles que tengan una sola función, como puede ser un DatePicker, ofrezcan feedback de audio cuando un usuario interacciona con él.</li>
                        <li>Reproducción de video: Si tu app reproduce videos, deben soportar subtítulos, para aquellos usuarios con dificultades de audición.</li>
                        <li>Audio feedback: Se recomienda el uso del framework de Android de accesibilidad, TalkBack, para proporcionar feedback de audio. </li>
                        <li>Controles personalizados con interacciones visuales complejas: Para estos tipos de visualizaciones, se recomienda ofrecer una jerarquía virtual usando la clase AccessibilityNodeProvider que permite a los servicios de accesibilidad ofrecer un modelo de interacción para el usuario.</li>
                        <li>Controles pequeños: Si los controles son muy pequeños, se debe considerar agruparlos para que sea más fácil de interactuar.</li>
                        <li>Imágenes decorativas: Los elementos que son decorativos no deberían tener descripción de contenido de accesibilidad.</li>
                    </ul>
                </p>
            </div>

            <div class="texto">
                <h1 id="hardcoded">Textos hard-coded</h1>
                <p>
                    No se debe de utilizar strings “hard-coded”. Estos strings son los que se escriben tal cual en el código. Su uso no se recomienda, porque sino aplicaciones como Talkback, cuando leen la pantalla, leerán tal cual lo que hay escrito.
                </p>            
                    <div class="divImagenes">
                        <img src="../assets/imagenes/hardcoded1.png">
                    </div>
                <p>

                </p>

                <div class="divImagenes">
                        <img src="../assets/imagenes/hardcoded2.png">
                </div>
            </div>

            <div class="texto">
                <h1 id="numero">Internacionalización de los números</h1>
                <p>
                    Los números tienen que estar en el formato apropiado para que Talkback los pueda leer correctamente. Esto lo podemos conseguir usando la clase NumberFormat.
                </p>
                    <div class="divImagenes">
                        <img src="../assets/imagenes/internnumeros1.png">
                    </div>
                
            </div>

            <div class="texto">
                <h1 id="fecha">Internacionalización de las fechas</h1>
                <p>
                    Talkback también anuncia las fechas de acuerdo a la configuración que tenga el teléfono. Otra vez, se desrecomienda usar textos hard-coded. Android nos ofrece la clase DateTimeFormatter para formatear la fecha correctamente.
                </p>

                    <div class="divImagenes">
                        <img src="../assets/imagenes/internfechas1.png">
                    </div>
            </div>

            <div class="texto">
                <h1 id="apoyo">Tecnologías de apoyo</h1>
                <p>
                    Las tecnologías de apoyo nos ayudan a mejorar las capacidades funcionales de personas con discapacidades.
                </p>
                <h4>Lectores de pantalla</h4>
                <p>
                    Un lector de pantalla es un programa que muestra y lee texto en braille o también lee texto en voz alta. Es muy útil para gente con problemas visuales o dificultades para leer.
                    Con los screen readers se puede navegar tocando en la pantalla o mediante una navegación lineal deslizando a través de ella.
                </p>
            </div>

            <div class="texto">
                <h1 id="jerarquia">Jerarquía</h1>
                <p>
                    La jerarquía es muy importante para que los usuarios puedan navegar con facilidades. Además, los usuarios entenderán dónde están en la aplicación. Por eso es importante enfatizar, y eso lo podemos lograr con múltiples señales visuales y textuales como el color, la forma, el texto y el movimiento.
                </p>
            </div>

            <div class="texto">
                <h1 id="color">Colores y contraste</h1>
                <p>
                    Los colores pueden ser usados para ayudar a los usuarios a interpretar el contenido, interactuar y entender las acciones.
                </p>
            </div>

            <div class="texto">
                <h1 id="layout">Layouts y tipografía</h1>
                <p>
                    Los elementos de toque de pantalla pueden ayudar a usuarios con problemas de visibilidad o que tienen dificultades para hacer click en los elementos.
                    Se puede, por ejemplo, hacer el área de un botón de toque más grande de lo normal, o incluso se puede hacer el botón más grande.
                    Los layouts se pueden hacer responsive para que se adapten a cualquier tipo de pantalla. Los elementos relacionados se pueden agrupar cerca unos de otros para mejorar la legibilidad.
                    Para la tipografía se tienen que aumentar el tamaño de la fuente de las letras, y se tienen que dejar aumentar el tamaño de la fuente.
                </p>
            </div>

            <div class="texto">
                <h1 id="strings">Strings</h1>
                <p>
                    Esta parte está más dirigida para los textos que son leídos por un screen reader de accesibilidad, como por ejemplo Talkback en Android. Se debe incluir textos, tanto visibles como no visibles, lo suficientemente descriptivos para se entienda y ayude a navegar al usuario que está escuchando.

                    Se puede incluir en las imágenes textos con el atributo ‘alt’ para describir la imagen. Un lector de pantalla leerá ese texto y ayudará a saber que está mostrando.
                </p>
            </div>

            <div class="texto">
                <h1 id="imagenes">Imágenes</h1>
                <p>
                    Según la W3C, las imágenes decorativas no necesitan tener ninguna regla aplicada de la accesibilidad. Las imágenes que no son decorativas sí deben tener un texto descriptivo y tener unos colores adecuados.
                    Este es un buen ejemplo del uso de texto descriptivo en una imagen.
                </p>
                <div class="divImagenes">
                    <img src="../assets/imagenes/imagenes1.png">
                </div>
                <p>
                    Sin embargo, este es un mal uso, ya que como podemos observar esa imagen no es lo suficientemente  descriptiva para lo que se necesitaría, que en este caso sería algo más referido a la localización del lugar.
                </p>
                <div class="divImagenes">
                    <img src="../assets/imagenes/imagenes2.png">
                </div>
            </div>

            <div class="texto">
                <h1 id="sonidos">Sonidos y movimientos</h1>
                <p>
                    Los usuarios pueden navegar guiándose por el sonido gracias al añadir etiquetas a los elementos de las interfaces.
                    Se puede limitar el movimiento para que los usuarios con problemas de movilidad y de visión puedan usar las interfaces cómodamente. También se puede limitar el flasheo de los elementos.
                    Los elementos que desaparezcan deberán hacerlo después de 5 segundos, que es lo recomendable.
                </p>
            </div>
        </div>

        <div id="textoWebPrincipal">
            <div class="texto">
                <h1 id="perceptible">Perceptible</h1>
                <p>
                    Son la información y componentes de la interfaz de usuario que deben de ser presentados a los usuarios de manera que puedan percibirlos.
                    Los contenidos audiovisuales deben de tener alternativas perceptibles para personas ciegas o sordas, como por ejemplo audio-descripción de vídeo, 
                    subtítulos y lengua de señas para hacer accesible el contenido. Los contenidos que no contienen texto se llaman non-text, y se le pueden 
                    indicar nombres que tienen que ser descriptivos para que sea perceptible por la mayoría de los usuarios. Por ejemplo con el atributo 'alt', 
                    podemos indicar un nombre a una imagen para usuarios con problemas de visibilidad.
                </p>
                <br>
                    <div class="divImagenes">
                        <img src="../assets/imagenes/perceptible1.png">
                    </div>
                <br>
                <p>
                    Además, la interfaz, imágenes, botones, reproductores de videos y otros elementos deben ser perfectamente identificables y
                    ejecutables por cualquier persona en cualquier situación, dispositivo y sistema operativo.
                    El color también forma parte del grupo de indicadores relevantes, ya que existe un porcentaje de la población que posee alguna condición 
                    que no puede percibirlos correctamente. Para modificar el color del texto lo podemos hacer simplemente con la propiedad de css 'color':
                </p>
                <br>
                <div class="divImagenes">
                    <img src="../assets/imagenes/perceptible2.png">
                </div>
                    <br>
            </div>

            <div class="texto">
                <h1 id="operable">Operable</h1>
                <p>
                    Los componentes de la interfaz de usuario y la navegación debe ser manejable por todos los usuarios. Se debe poder controlar todas las funciones
                    desde el teclado, ya que todo el mundo está acostumbrado a navegar los sitios web con el ratón, pero si éste falla en algún minuto, o un 
                    grupo de la población no puede usarlo por distintas razones, la navegación se hace casi imposible. Hay que proporcionar tiempo suficiente 
                    para leer y utilizar el contenido. Existen páginas web que usan elementos que van cambiando rápidamente de contenido. 
                    Los tiempo en que la información cambia deben de ser estudiados para que todos los usuarios puedan comprenderlos. También hay que tener en cuenta 
                    que existen usuarios con patologías epilépticas, y por eso no hay que desarrollar sitios web que cambien de formas  y de colores rápidamente.
                    Por último, es importante también que “Todos los caminos lleven a Roma”, por lo tanto hay que proporcionar ayudas a los
                    usuarios para navegar a través de la web.
                </p>
            </div>

            <div class="texto">
                <h1 id="comprensible">Comprensible</h1>
                <p>
                    Un sitio web debe de ser legible y comprensible. Esto quiere decir que la fuente y el fondo de los textos deben poseer un 
                    tipo de letra que puedan ser leídos por todos los usuarios, y si en la web existe una herramienta para ajustar la fuente mucho mejor.
                    Además, no se puede olvidar que la web tiene que ser predecible, es decir, que el usuario no pierda el tiempo tratando de adivinar
                    cómo hacer alguna acción o para qué funciona una herramienta.
                </p>
            </div>

            <div class="texto">
                <h1 id="robusto">Robusto</h1>
                <p>
                    La robustez en una web es la cualidad que tiene para ser compatible con todos los navegadores en todos los sistemas operativos y 
                    en todos los dispositivos, pero también con aplicaciones de tecnologías de apoyo, como 'screen readers' o lectores de pantalla.
                </p>
            </div>

            <div class="texto">
                <h1 id="conformidad">Conformidad</h1>
                <p>
                    Los criterios de conformidad son A, AA y AAA, de más básico a más completo respectivamente. 
                    Se aplican a toda la página, y no a partes de ella. Para cumplir cada nivel, la web debe satisfacer todos los criterios de conformidad de ella.
                    <br><br>
                    Los criterios que se deben cumplir para el nivel A son los siguientes: <br><br>
                    <ul>
                        <li>1.1.1 Contenido no textual Proporcionar alternativas de texto para el contenido no textual</li>
                        <li>1.2.1 Sólo audio y sólo vídeo (pregrabado) Proporcione una alternativa a los contenidos de sólo vídeo y sólo audio</li>
                        <li>1.2.2 Subtítulos (pregrabados) Proporcionar subtítulos para los vídeos con audio</li>
                        <li>1.2.3 Descripción de audio o alternativa multimedia (pregrabada) El vídeo con audio tiene una segunda alternativa</li>
                        <li>1.3.1 Información y relaciones Estructura lógica</li>
                        <li>1.3.2 Secuencia significativa Presentar el contenido en un orden significativo</li>
                        <li>1.3.3 Características sensoriales Utilizar más de un sentido para las instrucciones</li>
                        <li>1.4.1 Uso del color No utilizar una presentación que se base únicamente en el color</li>
                        <li>1.4.2 Control del audio No reproducir el audio automáticamente</li>
                        <li>2.1.1 Teclado Accesible sólo con el teclado</li>
                        <li>2.1.2 Sin trampa de teclado No atrapar a los usuarios del teclado</li>
                        <li>2.2.1 Tiempo Ajustable Los límites de tiempo tienen controles de usuario</li>
                        <li>2.2.2 Pausa, Stop, Hide Proporcionar controles de usuario para mover el contenido</li>
                        <li>2.3.1 Tres parpadeos o menos Ningún contenido parpadea más de tres veces por segundo</li>
                        <li>2.4.1 Bloqueos de omisión Proporcionar un enlace "Saltar al contenido</li>
                        <li>2.4.2 Títulos de página Utilizar títulos de página útiles y claros</li>
                        <li>2.4.3 Orden de enfoque Orden lógico</li>
                        <li>2.4.4 Propósito del enlace (en contexto) El propósito de cada enlace está claro por su contexto</li>
                        <li>3.1.1 Idioma de la página La página tiene un idioma asignado</li>
                        <li>3.2.1 On Focus Los elementos no cambian cuando reciben el foco</li>
                        <li>3.2.2 On Input Los elementos no cambian cuando reciben una entrada</li>
                        <li>3.3.1 Identificación de errores Identificar claramente los errores de entrada</li>
                        <li>3.3.2 Etiquetas o instrucciones Etiquetar elementos y dar instrucciones</li>
                        <li>4.1.1 Análisis sintáctico No hay errores importantes de código</li>
                        <li>4.1.2 Nombre, función, valor Construir todos los elementos para la accesibilidad</li>
                    </ul>
                    <br>
                    <p>Los criterios que se deben cumplir para el nivel AA son los siguientes:</p>
                    <br>
                    <ul>
                        <li>1.2.4 Subtítulos (en directo) Los vídeos en directo tienen subtítulos</li>
                        <li>1.2.5 Descripción de audio (pregrabada) Los usuarios tienen acceso a la descripción de audio de los contenidos de vídeo</li>
                        <li>1.4.3 Contraste (mínimo) La relación de contraste entre el texto y el fondo es de al menos 4,5:1</li>
                        <li>1.4.4 Redimensionamiento del texto El texto puede ser redimensionado hasta el 200% sin pérdida de contenido o función</li>
                        <li>1.4.5 Imágenes del texto No utilice imágenes del texto</li>
                        <li>2.4.5 Vías múltiples Ofrece varias formas de encontrar las páginas</li>
                        <li>2.4.6 Títulos y etiquetas Utilice títulos y etiquetas claros</li>
                        <li>2.4.7 Foco visible Asegúrese de que el foco del teclado es visible y claro</li>
                        <li>3.1.2 Idioma de las partes Informar a los usuarios cuando el idioma de una página cambia</li>
                        <li>3.2.3 Navegación coherente Utilizar los menús de forma coherente</li>
                        <li>3.2.4 Identificación coherente Utilizar iconos y botones de forma coherente</li>
                        <li>3.3.3 Sugerencia de errores Sugiere soluciones cuando los usuarios cometen errores</li>
                        <li>3.3.4 Prevención de errores (legales, financieros, de datos) Reducir el riesgo de errores en la introducción de datos sensibles</li>
                    </ul>
                    <br>
                    <p>Los criterios que se deben cumplir para el nivel AAA son los siguientes:</p>
                    <br>
                    <ul>
                        <li>1.2.6 Lenguaje de signos (pregrabado) Proporcionar traducciones al lenguaje de signos para los vídeos</li>
                        <li>1.2.7 Descripción de audio ampliada (pregrabada) Proporcionar una descripción de audio ampliada para los vídeos</li>
                        <li>1.2.8 Medios alternativos (pregrabados) Proporcionar una alternativa de texto a los vídeos</li>
                        <li>1.2.9 Sólo audio (en directo) Proporcionar alternativas para el audio en directo</li>
                        <li>1.4.6 Contraste (mejorado) La relación de contraste entre el texto y el fondo es de al menos 7:1</li>
                        <li>1.4.7 Audio de fondo bajo o nulo El audio es claro para que los oyentes lo escuchen</li>
                        <li>1.4.8 Presentación visual Ofrecer a los usuarios una gama de opciones de presentación</li>
                        <li>1.4.9 Imágenes de texto (sin excepción) No utilice imágenes de texto</li>
                        <li>2.1.3 Teclado (Sin excepción) Accesible sólo por teclado, sin excepción</li>
                        <li>2.2.3 Sin temporización No hay límites de tiempo</li>
                        <li>2.2.4 Interrupciones No interrumpir a los usuarios</li>
                        <li>2.2.5 Reautenticación Guarda los datos del usuario al reautenticarse</li>
                        <li>2.3.2 Tres parpadeos Ningún contenido parpadea más de tres veces por segundo</li>
                        <li>2.4.8 Ubicación Permita que los usuarios sepan dónde están</li>
                        <li>2.4.9 Propósito de los enlaces (sólo enlaces) El propósito de cada enlace está claro en su texto</li>
                        <li>2.4.10 Títulos de sección Divida el contenido con títulos</li>
                        <li>3.1.3 Palabras inusuales Explique cualquier palabra extraña</li>
                        <li>3.1.4 Abreviaturas Explique las abreviaturas</li>
                        <li>3.1.5 Nivel de lectura Los usuarios con nueve años de escuela pueden leer su contenido</li>
                        <li>3.1.6 Pronunciación Explique cualquier palabra que sea difícil de pronunciar</li>
                        <li>3.2.5 Cambio a petición No cambies elementos de tu web hasta que los usuarios te lo pidan</li>
                        <li>3.3.5 Ayuda Proporcione ayuda e instrucciones detalladas</li>
                        <li>3.3.6 Prevención de errores (todos) Reduzca el riesgo de todos los errores de entrada</li>
                    </ul>
            </div>
        </div>-->

        <!--<div id="textoTestPrincipal">
            <h1 id="urlTest">URL TEST: XXXXXXXXXXXXXXXXXX</h1>
            
            <div class="testContenido" id="errores">
                <p style="font-size: 25px">{{ numErrores.error }} errores</p>

                <ul class="listaTest">
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    
                </ul>
            </div>

            <div class="testContenido" id="erroresContraste">
                <p style="font-size: 25px">X errores de contraste</p>

                <ul class="listaTest">
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    
                </ul>
            </div>

            <div class="testContenido" id="alertas">
                <p style="font-size: 25px">X alertas</p>

                <ul class="listaTest">
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    
                </ul>
            </div>

            <div class="testContenido" id="caracteristicas">
                <p style="font-size: 25px">X características</p>

                <ul class="listaTest">
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    
                </ul>
            </div>

            <div class="testContenido" id="elementosEstructurales">
                <p style="font-size: 25px">X elementos estructurales</p>

                <ul class="listaTest">
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    
                </ul>
            </div>

            <div class="testContenido" id="elementosAria">
                <p style="font-size: 25px">X elementos ARIA</p>

                <ul class="listaTest">
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    
                </ul>
            </div>
        </div>-->
    </div>

</template>

<script>

export default{
    props: ["textoComponente"]
}
</script>

<style>

    #mainTexto{
        margin-top: 20px;
    }

    #textoAndroidPrincipal{
        display: inline;
    }

    #textoWebPrincipal{
        display: none;
    }

    #textoTestPrincipal{
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;

    }

    .texto{
        margin-bottom: 20px;
    }

    .testContenido{
        border: 2px solid black;
        width: 100%;
        height: 200px;
        margin-top: 25px;
    }

    .listaTest{
        margin-left: 25px;
        margin-top: 20px;
        font-size: 20px;
    }

    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .divImagenes{
        width:100%;
        height:100px;
    }
</style>