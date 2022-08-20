export default {

    data() {
        //https://stackoverflow.com/questions/62920847/includes-with-filter-in-vue-js
        //https://stackoverflow.com/questions/64512912/use-of-common-methods-within-other-vue-components
        //https://codesandbox.io/s/easy-vuejs-search-icrkf
        //https://codingpotions.com/vue-mixins
        //https://getbootstrap.com/docs/5.0/components/accordion/
        return {
            search: "",
            textos: [{
                id: 0,
                titulo: "perceptible",
                subtitulo: "Small Screen Size",
                tech: "android",
                textoMostrado:

                    "<p>One of the most common characteristics of mobile devices is the small size of their screens. This limited size places practical constraints on the amount of information that can be effectively perceived by users at any one time, even when high screen resolution might enable large amounts of information to be rendered.   The amount of information that can be displayed is even further limited when magnification is used, for example by people with low vision. See <a href='#zoom'>2.2 Zoom/Magnification</a>.</p>" +
                    "<p>Some best practices for helping users to make the most of small screens include </p>" +
                    "<ul>" +
                    "<li>Consider mobile when initially designing the layout and relevancy of content. </li>" +
                    "<li>Where necessary, adapt the information provided on mobile compared   to desktop/laptop versions with a dedicated mobile version or a   responsive design    " +
                    "<ul>" +
                    "<li>a dedicated mobile version contains content tailored for mobile use. For example, the content may contain fewer content modules, fewer images, or focus on important mobile usage scenarios. </li>" +
                    "<li>a responsive design contains content that stays the same, but CSS   stylesheets are used to render it differently depending on the viewport   width. For example, on narrow screens the navigation menus may be hidden   until the user taps a menu button. </li>" +
                    "</ul>" +
                    "</li>" +
                    "<li>Minimizing the amount of information that is put on each page compared to desktop/laptop versions by providing a dedicated mobile version or a responsive design:    </li>" +
                    "<li>Providing a reasonable default size for content and touch controls. See <a href='#targetSize'>B.2 Touch Target Size and Spacing</a> to minimize the need to zoom in and out for users with low vision. </li>" +
                    "<li> Adapting the length of link text to the viewport width. </li>" +
                    "<li> Positioning form fields below, rather than beside, their labels (in portrait layout) </li>" +
                    "</ul>"
            },
            {
                id: 1,
                titulo: "perceptible",
                subtitulo: "Zoom/Magnification",
                tech: "android",
                textoMostrado: "<p>A variety of methods allow users to control content size on mobile devices with small screens. Some of these features are targeted at all users (e.g. browser “pinch zoom” features), while others tend to be made available as &quot;accessibility features&quot; targeted at people with visual or cognitive disabilities.</p>" +

                    "<p><em>Note on reflow</em>: There are important accessibility differences between zoom/magnification features that horizontally reflow content, especially text, and those that do not. When text content is not reflowed, users must pan back and forth as they read each line.</p>" +

                    "<p>Zoom/Magnification features include the following: </p>" +
                    "<ul>" +
                    "    <li>OS-level features" +
                    "    <ul>" +
                    "        <li> Set default text size (typically controlled from the display settings) <em>Note</em>: System text size is often not supported by mobile browsers. </li>" +
                    "        <li> Magnify entire screen (typically controlled from the accessibility settings). <em>Note</em>: Using this setting requires the user to pan vertically and horizontally. </li>" +
                    "        <li> Magnifying lens view under user's finger (typically controlled from the accessibility settings) </li>" +
                    "    </ul>" +
                    "    </li>" +
                    "    <li>Browser-level features" +
                    "    <ul>" +
                    "        <li> Set default text size of text rendered in the browser's viewport</li>" +
                    "        <li> Reader modes that render the main content without certain types of extraneous content and at a user-specified text size </li>" +
                    "        <li> Magnify browser's viewport (typically 'pinch-zoom'). <em>Note</em>: Using this setting typically requires the user to pan vertically and horizontally, although some browsers have features that re-flow the content at the new magnification level, overriding author attempts to prevent pinch-zoom). </li>" +
                    "        </ul>" +
                    "        </li>" +
                    "    </ul>" +
                    "    </li>" +
                    "</ul>" +
                    "<p>The WCAG 2.0 success criterion that is most related to zoom/magnification is </p>" +
                    "    <div> " +
                    "    <ul><li><strong>1.4.4 Resize text</strong> (Level AA) </li></ul>" +
                    "</div> " +
                    "<p>SC 1.4.4 requires text to be resizable without assistive technology up to at least 200 percent. To meet this requirement content must not prevent text magnification by the user. </p>" +
                    "<p>Some methods for supporting magnification/zoom include: </p>" +
                    "<ul>" +
                    "    <li>Use techniques that support text resizing   without requiring horizontal panning. Relying on full   viewport zooming (e.g. not blocking the browser's pinch zoom feature)   requires the user to pan horizontally as well as vertically.  </li>" +
                    "    <li>Ensure that the browser pinch zoom is not blocked by the page's   viewport meta element so that it can be used to zoom the page to at least 200%.   Restrictive values for user-scalable and maximum-scale attributes of   this meta element should be avoided. While this   technique meets the success criteria it is less usable than supporting   text resizing features that reflow content to the user's chosen viewport   size.  </li>" +
                    "    <li>Support for OS text size settings. For web content this will depend on browser support.</li>" +
                    "    <li>Provide on-page controls to change the text size. </li>" +
                    "    </ul>" +
                    "<p>Accessibility features geared toward specific populations of people with   disabilities fall under the definition of assistive technology adopted   by WCAG and thus cannot be relied upon to meet success criterion 1.4.4.    For example, an OS-level zoom feature that magnifies all platform   content and has features to specifically support people with low vision   is likely considered an assistive technology. </p>"
            },
            {
                id: 2,
                titulo: "perceptible",
                subtitulo: "perceptible2",
                tech: "android",
                textoMostrado: "perceptible2"
            },
            {
                id: 3,
                titulo: "perceptible",
                subtitulo: "perceptible3",
                tech: "android",
                textoMostrado: "perceptible3"
            },
            //WEB PERCEPTIBLE
            {
                id: 4,
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
                id: 5,
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
                id: 6,
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
                id: 7,
                titulo: "perceptible",
                subtitulo: "Distinguible",
                tech: "web",
                textoMostrado: "<p>Que sea distinguible consiste en realizar de una forma más sencilla que los usuarios puedan escuchar y ver el contenido." +
                "Se pueden usar colores para diferenciar la información. Asimismo, se debe explicar en una leyenda el significado de cada color. Para las personas con problemas de visión, se puede combinar el color con el texto, para así ser leído por una tecnología asistiva"+
                "<p>Es importante permitir reproducir un audio al entrar en la página, pero más importante es que dure 3 segundos o menos y que pare automáticamente, para no entorpecer al lector de pantalla o tecnología de apoyo.</p>"+
                "</p>"
            },
            //WEB OPERABLE
            {
                id: 8,
                titulo: "operable",
                subtitulo: "Accesible desde el teclado",
                tech: "web",
                textoMostrado: "<p>Que toda la funcionalidad sea accesible desde el teclado." +
                    "</p>"
            },
            {
                id: 9,
                titulo: "operable",
                subtitulo: "Suficiente tiempo",
                tech: "web",
                textoMostrado: "<p>Ofrecer a los usuarios el tiempo suficiente para usar el contenido." +
                    "</p>"
            },
            {
                id: 10,
                titulo: "operable",
                subtitulo: "Convulsiones y reacciones físicas",
                tech: "web",
                textoMostrado: "<p>No crear contenido que pueda causar convulsiones o reacciones físicas." +
                    "</p>"
            },
            {
                id: 11,
                titulo: "operable",
                subtitulo: "Navegable",
                tech: "web",
                textoMostrado: "<p>Ofrecer a los usuarios diferentes formas para navegar por el sitio web, encontrar contenido y determinar donde están." +
                    "</p>"
            },
            {
                id: 12,
                titulo: "operable",
                subtitulo: "Modalidades de entrada",
                tech: "web",
                textoMostrado: "<p>Que los usuarios puedan manejarse por el sitio web a través de dispositivos de entrada diferentes del teclado." +
                    "</p>"
            },
            //WEB ENTENDIBLE
            {
                id: 13,
                titulo: "entendible",
                subtitulo: "Legible",
                tech: "web",
                textoMostrado: "<p>Que el contenido sea legible y entendible." +
                    "</p>"
            },
            {
                id: 14,
                titulo: "entendible",
                subtitulo: "Predecible",
                tech: "web",
                textoMostrado: "<p>Que las páginas webs se muestren y operen de forma predecible." +
                    "</p>"
            },
            {
                id: 15,
                titulo: "entendible",
                subtitulo: "Asistencia de entrada",
                tech: "web",
                textoMostrado: "<p>Ayudar a los usuario a evitar errores." +
                    "</p>"
            },
            //WEB ROBUSTO
            {
                id: 16,
                titulo: "robusto",
                subtitulo: "Compatible",
                tech: "web",
                textoMostrado: "<p>Que el contenido actual y futuro pueda ser compatible en el mayor número de casos posible." +
                    "</p>"
            },
        ]
        };
    }
}