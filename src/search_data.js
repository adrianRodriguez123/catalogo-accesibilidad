export default {

    data() {
        //https://stackoverflow.com/questions/62920847/includes-with-filter-in-vue-js
        //https://stackoverflow.com/questions/64512912/use-of-common-methods-within-other-vue-components
        //https://codesandbox.io/s/easy-vuejs-search-icrkf
        //https://codingpotions.com/vue-mixins
        //https://getbootstrap.com/docs/5.0/components/accordion/
        return {
            search: "",
            textos: [
            //WEB PERCEPTIBLE
            {
                id: 0,
                titulo: "perceptible",
                subtitulo: "Contenido no textual",
                tech: "web",
                textoMostrado: "<p>Ofrecer textos alternativos para contenido no textual. Esto se puede conseguir con textos de gran tamaño, braile, audio, símbolos o lenguaje más simple. Para"+
                " poder conseguirlo en nuestra web, existen 2 maneras:"+
                    "<ul><li>Atributo 'alt': Es un atributo HTML para un texto que describe una imagen. También se puede aplicar a etiquetas area, input y applet. "+
                        "Además también ayuda a que los motores de búsqueda indexen mejor nuestra web."+
                        "En el atributo 'alt' se debe escribir un texto que cumpla la misma función que la imagen y que la describa.<br><br></li>"+
                        "<img src='./imagenes/perceptibleWeb.png' alt='Imagen con atributo alt' />"+
                        "<br><br>"+
                        "<li>Atributo ‘aria-label’: Parecido al atributo ‘alt’. Se utiliza para definir una cadena que etiqueta al elemento actual. Se puede utilizar con cualquier elemento HTML."+
                        "<img src='./imagenes/arialabel.jpg' alt='Imagen con atributo aria-label' />"+
                        "<br><br>"+
                    "</ul>"+
                "</p>"
            },
            {
                id: 1,
                titulo: "perceptible",
                subtitulo: "Cotenido multimedia basado en el tiempo",
                tech: "web",
                textoMostrado: "<p>Todo el contenido de audio y de vídeo tiene que tener alternativas para asegurarse de que todos los usuarios puedan disfrutarlo, como por ejemplo subtítulos."+
                "<ul>"+
                    "<li>Con la interfaz HTMLMediaElement nos podemos ayudar para soportar contenido multimedia.</li>" +
                    "<li>Si el contenido es solo vídeo, para las personas con discapacidades visuales se podría aportar un audio (hablado) describiendo la información del vídeo.</li>"+
                    "<li>Si el contenido es un video en directo, por ejemplo en la televisión, se deben de crear subtítulos online.</li>"+
                    "<li>Si se necesita, en un pequeño recuadro del vídeo se deberá mostrar una intérprete de lenguaje de señas para las personas con problemas de audición.</li>"+
                    "<li>Se puede proporcionar un segundo vídeo con las descripciones en audio, ya que puede ocurrir que las descripciones de audio pueden ser más largas que lo que dura la escena.</li>"+
                "</ul>" +
                    "</p>"
            },
            {
                id: 2,
                titulo: "perceptible",
                subtitulo: "Adaptable",
                tech: "web",
                textoMostrado: "<p>Que el contenido pueda ser presentado de diferentes formas sin que se pierda información o estructura. Para ello, la información y la estructura de la web puede determinarse de forma programada, de la siguientes maneras:" +
                    "<li>Con el atributo 'role' podemos añadir una explicación sobre la página para que aquel que use tecnologías de apoyo, puedan ser leídas y bien entendidas.</li>"+
                    "<img src='./imagenes/roleatributo.JPG'/>"+
                    "<br><br>"+
                    "<li>Además de lo previamente comentado, podemos usar el atributo 'role' para un grupo de elementos mediante el valor 'group' o con el valor 'region'. El primero no estaría previsto que fuera leído por tecnologías de apoyo pero el segundo sí.</li>"+
                    "<img src='./imagenes/roleatributogroup.PNG'/>"+
                    "<img src='./imagenes/roleatributoregion.PNG'/>"+
                    "<br><br>"+
                    "<li>También se puede conseguir con el atributo 'aria-labelledby'</li>"+
                    "<img src='./imagenes/arialabeledby.JPG'/>"+
                    "<br><br>"+
                    "<p>Para no perder información, es necesario que el orden de los componentes estén correctamente posicionados, para que así las tecnologías asistivas puedan orientar correctamente al usuario.</p>"+
                    "<p>Tampoco se tiene que bloquear la orientación del contenido(vertical u horizontal), a menos que sea ensencial.</p>"+
                    "El propósito de cada campo de entrada se puede definir mediante programación cuando avisamos anteriormente de como estamos procesando los datos o el contenido se utiliza para identificar el significado esperado."+
                    "Podemos usar el atributo 'role' para que se pueda identificar el propósito de cada campo."+
                    "<img src='./imagenes/roleatributo.JPG'/>"+
                    "</p>"
            },
            {
                id: 3,
                titulo: "perceptible",
                subtitulo: "Distinguible",
                tech: "web",
                textoMostrado: "<p>Que sea distinguible consiste en realizar de una forma más sencilla que los usuarios puedan escuchar y ver el contenido." +
                "<p>Se pueden usar colores para diferenciar la información. Asimismo, se debe explicar en una leyenda el significado de cada color. Para las personas con problemas de visión, se puede combinar el color con el texto, para así ser leído por una tecnología asistiva. No hay que olvidarse de que se debe dejar elegir al usuario el color del fondo.</p>"+
                "<p>Es importante permitir reproducir un audio al entrar en la página, pero más importante es que ese audio dure 3 segundos o menos y que pare automáticamente, para no entorpecer al lector de pantalla o tecnología de apoyo. También se puede parar mediante algún mecanismo por el usuario.</p>"+
                "<p>Es necesarios asegurarse de que se pueda hacer más grande el texto, mediante alguna función (incorporada en el navegador) de zoom por ejemplo, pero también todos los elementos sean reajustados. También se puede incorporar alguna función en la web para reajustar el texto, modificar la fuente, la alineación, el tamaño,etc.</p>"+
                "<p>En el caso de que exista audio y sonido de fondo, el audio debe ser 20 db mayor que el sonido de fondo, para las personas con problemas de audición.</p>"+
                "<p>Para no perder información acerca de los tooltips, podemos usar el atributo 'role':</p>"+
                "<ul><li>NOTA: El atributo 'aria-describedby' sirve para enlazar otro elemento de la página."+
                "<img src='./imagenes/roleatributotooltip.PNG'/></li>"+
                "</ul>"+
                "</p>"
            },
            //WEB OPERABLE
            {
                id: 4,
                titulo: "operable",
                subtitulo: "Accesible desde el teclado",
                tech: "web",
                textoMostrado: "<p>Que toda la funcionalidad sea accesible desde el teclado. Con la tecla Tab o Tabuladora podemos movernos por la página y comprobar si se puede usar solamente el teclado. También lo podemos intentar para aquellas páginas donde se realice la función de arrastrar y soltar con las teclas del teclado en forma de flechas, o además podría añadirse una funcionalidad para cortar la foto y pegarla." +
                "Los elementos más comunes de HTML permiten que se utilicen con el teclado. Estos elementos pueden ser &lt;a&gt;, &lt;button&gt;, &lt;fieldset&gt;, &lt;input&gt;, &lt;textarea&gt; y &lt;select&gt;."+
                "También tiene que ser posible que se quite el foco del teclado con el teclado, para que el usuario que no pueda usar el ratón no se quede atrapado en el contenido."+
                "Igualmente pueden existir atajos de teclado de un solo carácter, pero éstos tienen que tener la opción de poder ser modificados, quitados y activos solo cuando esté el foco en elemento correspondiente."+
                    "</p>"
            },
            {
                id: 5,
                titulo: "operable",
                subtitulo: "Suficiente tiempo",
                tech: "web",
                textoMostrado: "<p>Ofrecer a los usuarios el tiempo suficiente para leer y utilizar el contenido."+
                    "<p>Para cada acción que requiera tiempo límite, el usuario debe disponer alguna función que le permita parar el tiempo o ajustarlo a su medida.</p>"+
                    "<p>Para cualquier movimiento, parpadeo o scroll debe de existir alguna funcionalidad que permita parar la acción, a menos que sea esencial.</p>"+
                    "<p>Para las aplicaciones web que requieran un inicio de sesión, cuando la sesión expire, se tendrá que haber guardado los datos, para que al autenticarse de nuevo sigán estando. Se debería además, avisar de cuanto tiempo lleva el usuario inactivo porque podrían causar pérdidas de datos.</p>"+
                    "</p>"
            },
            {
                id: 6,
                titulo: "operable",
                subtitulo: "Convulsiones y reacciones físicas",
                tech: "web",
                textoMostrado: "<p>No crear contenido que pueda causar convulsiones o reacciones físicas." +
                    "<p>Para las personas con problemas de epilepsia es necesario controlar cosas como que no hayan más de 3 parpadeos por segundo en nuestra web. También se puede proporcionar alguna función para deshabilitar la animación del movimiento provocada por la interacción, a menos que sea esencial para la funcionalidad o para la información trasmitida.</p>"+
                    "</p>"
            },
            {
                id: 7,
                titulo: "operable",
                subtitulo: "Navegable",
                tech: "web",
                textoMostrado: "<p>Ofrecer a los usuarios diferentes formas para navegar por el sitio web, encontrar contenido y determinar donde están." +
                    "<p>Un mecanismo que se debe proporcionar es el de poder saltarse grandes bloques de contenido que estén repetidos. Podría ser diferentes links para saltarse cada bloque o agrupar los bloques y añadir 1 solo link.</p>"+
                    "<p>También es importante que el título de la página sea el correcto para que pueda ser bien interpretado. De esta manera se escribe el título de una página:</p>"+
                    "<img src='./imagenes/tituloweb.PNG' />"+
                    "<p>Si la navegación de una web es secuencial, se deberán mantener el orden de los elementos que reciban el foco, y ese foco debe de estar resaltado en la web.</p>"+
                    "<p>Los enlaces que el usuario puede usar en toda la web tienen un propósito, y ese propósito lo podemos indicar programáticamente: </p>"+
                    "<ul>"+
                        "<li>"+
                            "<p>Lo podemos hacer mediante el atributo 'href'</p>"+
                            "<img src='./imagenes/linkProposito1.PNG'/>"+
                        "</li><br>"+
                        "<li>"+
                            "<p>También lo podemos hacer mediante el atributo 'alt'</p>"+
                            "<img src='./imagenes/linkProposito2.PNG'/>"+
                        "</li><br>"+
                        "<li>"+
                            "<p>También lo podemos hacer mediante el atributo 'aria-labelledby'</p>"+
                            "<img src='./imagenes/linkProposito3.PNG'/>"+
                        "</li><br>"+
                        "<li>"+
                            "<p>También lo podemos hacer mediante el atributo 'aria-label'</p>"+
                            "<img src='./imagenes/linkProposito4.PNG'/>"+
                        "</li><br>"+
                    "</ul>"+
                    "<p>Es necesario proporcionar cabeceras, etiquetas y títulos descriptivos.</p>"+
                    "<p>Es importante añadir en la web el recurso llamado 'migas de pan0 para que el usuario sepa en todo momento donde está y como ha llegado hasta ahí.</p>"+
                    "<p>Por último, es bastante útil utilizar cabeceras o títulos para ordenar la página: <br></p>"+
                    "<img src='./imagenes/headings.PNG'/>"+
                    "</p>"
            },
            {
                id: 8,
                titulo: "operable",
                subtitulo: "Modalidades de entrada",
                tech: "web",
                textoMostrado: "<p>Que los usuarios puedan manejarse por el sitio web a través de dispositivos de entrada diferentes del teclado." +
                "<p>Uno de los objetivos es asegurarse de que el contenido puede ser utilizado por un solo puntero en vez de muchos. Se debe de poder abortar o deshacer la acción en cualquier momento.</p>"+
                "<p>El tamaño del puntero objetivo del puntero tiene que ser de al menos 44 por 44 CSS pixels, o lo que es lo mismo 9mm cuadrados.</p>"+
                    "</p>"
            },
            //WEB ENTENDIBLE
            {
                id: 9,
                titulo: "entendible",
                subtitulo: "Legible",
                tech: "web",
                textoMostrado: "<p>Que el contenido sea legible y entendible." +
                    "<p>Se debe determinar el idioma por defecto de la página programáticamente, excepto en los nombres propios, terminos técnicos, palabras de otro idioma.</p><br>"+
                    "<img src='./imagenes/atributoLanguage.PNG' />"+
                    "<p>Asimismo, para aquellas palabras que no se puedan traducir, será necesario aportar su significado.</p>"+
                    "<p>Se puede incorporar un botón que haga la funcionalidad de 'Leer la página en alto' también.</p>"+
                    "</p>"
            },
            {
                id: 10,
                titulo: "entendible",
                subtitulo: "Predecible",
                tech: "web",
                textoMostrado: "<p>Que las páginas webs se muestren y operen de forma predecible." +
                    "<p>Para que sea predecible, es importante que cuando un elemento de nuestra web reciba el foco, que no se produzca un cambio de contexto. Cambiar una configuración de un elemento de la interfaz no necesariamente cambia el contexto de la web. Para realizar un cambio de contexto, siempre será avisando al usuario y confirmando la operación.</p>"+
                    "<p>Si aparecen funcionalidades en la web repetidas, éstas deberán tener la misma funcionalidad en toda la web.</p>"+
                    "</p>"
            },
            {
                id: 11,
                titulo: "entendible",
                subtitulo: "Asistencia de entrada",
                tech: "web",
                textoMostrado: "<p>Ayudar a los usuario a evitar errores." +
                    "<p>En el caso de un formulario, se puede añadir instrucciones al inicio de la web para explicar como escribir correctamente cada campo de entrada.</p>"+
                    "<p>Si un error de entrada es detectado, se tiene que avisar el usuario y describir al usuario el error. Por ejemplo, al no cumplir uno de los requisitos registrando una contraseña, o al no rellenar un campo necesario de un formulario.</p><br>"+
                    "<p>En la siguiente imagen podemos ver que el atributo 'aria-invalid' se puede indicar mediante Javascript. De esta manera, los lectores de pantallas pueden saber cuando existe un error y avisarlo.</p>"+
                    "<img src='./imagenes/ariainvalid.PNG' />"+
                    "<br><p>También podemos avisar al usuario mediante el atributo role con valor 'alertdialog'. El lector de pantalla será capaz de leer estos atributos.</p>"+
                    "<img src='./imagenes/roleAlertDialog.PNG'/>"+
                    "<br><p>También es posible indicarle al lector de pantalla que un campo de texto es necesario rellenarlo.<br></p>"+
                    "<img src='./imagenes/ariarequired.PNG' />"+
                    "<p>Para las páginas web que poseen operaciones bancarias o compromisos legales es necesario que las operaciones sean reversibles, que los datos introducidos por el usuario sean comprobados y ofrecerles la oportunidad de corregirlos y que todo eso ocurra antes de realizar el envío de los datos.</p>"+
                    "</p>"
            },
            //WEB ROBUSTO
            {
                id: 12,
                titulo: "robusto",
                subtitulo: "Compatible",
                tech: "web",
                textoMostrado: "<p>Que el contenido actual y futuro pueda ser compatible en el mayor número de casos posible." +
                    "<p>Es necesario evitar ambigüedades en las páginas web, para que sea lo más compatible posible por otros agentes. En HTML, podemos añadir al inicio del fichero la declaración !DOCTYPE, para saber más fácilmente cual es la versión que se está usando. Con los ficheros XML podemos indicar la versión al principio también, solamente indicando el número de la versión.</p>"+
                    "<p>Es importante no olvidarse de indicar los nombres de los componentes de la interfaz de usuario, sus roles, sus valores, sus propiedades y sus estados, puesto que se puede hacer pragramáticamente y ayudan a las tecnologías de apoyo a que puedan interpretar mejor la página. Todo esto lo podemos indicar con los llamados atributos Aria-*. Estos son unos ejemplos  de algunos de ellos:</p>"+
                    "<br><img src='./imagenes/ariarequired.PNG'/>"+
                    "<br><br><img src='./imagenes/ariainvalid.PNG'/>"+
                    "<br><br><img src='./imagenes/arialabel.JPG'/>"+
                    "<br><br><img src='./imagenes/arialabeledby.JPG'/>"+
                "</p>"
            },
            //ANDROID PERCEPTIBLE
            {
                id: 13,
                titulo: "perceptible",
                subtitulo: "Tamaño de pantalla pequeño",
                tech: "android",
                textoMostrado:
                    "<p>Los móviles poseen una pantalla bastante pequeña comparada con la de un ordenador. Esto es un inconveniente para aquellas personas con problemas de visión. Por tanto es necesario realizar las fuentes y los iconos más grandes."+
                    "<p>También es necesario crear un diseño responsivo para que se adapte a todo tipo de pantallas móviles y minimizar la cantidad de información que se pone en cada página, en comparación con las versiones para ordenadores.</p>"+
                    "<p>No hay que olvidarse del tamaño del área de pulsación los controles táctiles, para no tener que realizar zoom para pulsar.</p>"
            },
            {
                id: 14,
                titulo: "perceptible",
                subtitulo: "Zoom/Aumento",
                tech: "android",
                textoMostrado: "<p>Existen diversos métodos que permiten a los usuarios controlar el tamaño de los contenidos en móviles. Uno de ellos puede ser mediante el apartado de configuración del propio teléfono, en la sección de accesibilidad.</p>"+
                "<p>Hay que destacar la función de 'Pinch zoom' o 'Pellizco', con la que podemos hacer más grande o más pequeña nuestra pantalla. Está disponible en cualquier dispositivo móvil pero en Android lo podemos programar para nuestra app de la siguiente manera:</p>"+
                "<img src='./imagenes/pinchzoom.PNG'/><br>"+
                "<br>El tamaño de la fuente de los textos de nuestra app lo podemos indicar de la siguiente manera:"+
                "<br><br><img src='./imagenes/fontsize.PNG'/>"
            },
            {
                id: 15,
                titulo: "perceptible",
                subtitulo: "Contraste",
                tech: "android",
                textoMostrado: "<p>Este punto es bastante importante para los usuarios de baja visión. Los "+
                    "dispositivos móviles tienden más a utilizarse en entornos variados y por eso es más probable el deslumbramiento por el sol u otras fuentes."+
                    "<p>El contraste es la diferencia deluz entre dos colores. Cuanto más contraste, mejor para que aquellas personas con problemas de vista. </p>"+
                    "<p>Para monitores de 15 pulgadas con una resolución de 1024x768 y una distancia de visualización de 24 pulgadas, se considera suficiente una fuente de texto de 18 puntos o 14 si está en negrita</p>"+
                    "<p>Se recomienda también usar el llamado 'dark mode' o 'modo oscuro' en nuestra app. Para las personas con problemas de visión, más específicamente las que ven manchas, o flotadores, es muy útil este modo ya que los flotadores son más visibles en un fondo blanco, y por lo tanto incomodan mucho más la usabilidad de nuestra app. Podemos programarlo de la siguiente manera:</p>"+
                    "<br><img src='./imagenes/darkmode.PNG'/>"+
                    "<br>El atributo color con nombre 'colorPrimary' corresponde al color de la barra superior y el atributo color con nombre  'colorAccent' corresponde a los colores de los controles de la interfaz. De esta manera los estamos sobreescribiendo para que tengan el color que nosotros queremos."+
                    "<p>Con la ayuda de Material Design, la guía oficial de Google para el diseño de interfaces, nos podemos encargar de los demás colores, ya que aquí solo gestionamos 2 (aunque podría ser suficiente).</p>"+
                    "<br><img src='./imagenes/darkmode2.PNG'/>"+
                    "<p>Después en el método onCreate() del activity solo tendríamos que habilitar el modo oscuro. Se recomienda al desarrollador, que realice una funcionalidad para permitir al usuario escoger el modo de vista que quiera.</p>"+
                    "<br><img src='./imagenes/darkmode3.PNG'/>"+
                    ""
            },
            {
                id: 16,
                titulo: "perceptible",
                subtitulo: "Diseño de pantallas (layouts)",
                tech: "android",
                textoMostrado: "<p>Es recomendable usar headers o cabeceras para estructurar bien el contenido. Una persona que esté usando tecnologías de apoyo, tendrá más fácil la navegación por la app. Pero los lectores de pantalla no conocen que campo de texto es un header. ¿Cómo podemos conseguir eso? Con el atributo 'android:accessibilityHeading'.</p>"+
                "<br><img src='./imagenes/accesibilityheading.PNG'/>"+
                "<p>Otra manera de realizar la navegación más sencilla para las tecnologías de apoyo es agrupando los objetos. (SC 1.3.2). Para agruparlos, podemos realizar la vista 'focusable' o enfocable. Con los siguientes atributos podemos conseguirlo:</p>"+
                "<br><p>Con el atributo 'android:focusable' decimos que esta vista tendrá el foco y el atributo 'android:focusableInTouchMode' decimos que no se permite el modo toque. Esto quiero decir que solo tendrá el foco este elemento, cuando sea leído por un lector de pantalla. Al realizar esto, la vista se vuelve no clickable.</p>"+
                "<br><img src='./imagenes/focusable.PNG'/>"+
                "<br><br><p>Aunque no lo parezca, es importante indicar que la habilitación de orientación vertical y horizontal es necesaria.</p>"+
                "<p>También, hay que destacar el uso de las etiquetas correctamente, porque un lector de pantalla puede leer una etiqueta y no saber a qué elemento se refiere. Por ese motivo usamos el atributo 'android:labelFor':</p>"+
                "<img src='./imagenes/labelFor.PNG'/>"+
                ""
            },
            //ANDROID OPERABLE
            {
                id: 17,
                titulos: "operable",
                subtitulo: "Navegando por la pantalla",
                tech: "android",
                textoMostrado: "<p>A diferencia de un ordenador, un teléfono no posee un teclado. Este es un        componente vital para dar soporte a las personas con problemas físicos. Pero, aunque no se disponga de uno, siempre hay algún recurso. Se debe mencionar que sí se puede usar un teclado, cuando la app se esté desarrollando en un emulador.</p>"+
                "<p>Para mejorar la navegación por la app, y por tanto la operabilidad, podemos usar la aplicación TalkBack. Esta aplicación es un servicio de accesibilidad creado por Android, que ayuda a los usuarios con discapacidades a poder usar los dispositivos.</p>"+
                "<p>Para que TalkBack pueda navegar por la pantalla, se debe añadir el atributo 'android:nextFocusForward'. De esta forma, podemos indicarle a TalkBack cual es el siguiente elemento para moverse por la pantalla.</p>"+
                "<br><img src='./imagenes/navegandoPantalla.PNG'/>"+
                "<p>Para mejorar la navegación por la pantalla, también podemos hacer uso del objeto llamado TtsSpan (Text-to-speech span). Con este objeto podremos decirle al lector de pantalla que lea en voz alta el texto que nosotros le indiquemos.</p>"+
                "<p></p>"+
                ""
            }
        ]
        };
    }
}