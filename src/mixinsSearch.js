export default {
    
    data() {
        //https://stackoverflow.com/questions/62920847/includes-with-filter-in-vue-js
        //https://stackoverflow.com/questions/64512912/use-of-common-methods-within-other-vue-components
        //https://codesandbox.io/s/easy-vuejs-search-icrkf
        //https://codingpotions.com/vue-mixins
        //https://getbootstrap.com/docs/5.0/components/accordion/
        return {
            search: "",
            t: "mititulo",
            content: "micontenido",
            textos: [
                {
                    id: 0,
                    titulo: "perceptible",
                    subtitulo: "Small Screen Size",
                    textoMostrado:

                        "<p>One of the most common characteristics of mobile devices is the small size of their screens. This limited size places practical constraints on the amount of information that can be effectively perceived by users at any one time, even when high screen resolution might enable large amounts of information to be rendered.   The amount of information that can be displayed is even further limited when magnification is used, for example by people with low vision. See <a href='#zoom'>2.2 Zoom/Magnification</a>.</p>"+
                        "<p>Some best practices for helping users to make the most of small screens include </p>"+
                        "<ul>"+
                            "<li>Consider mobile when initially designing the layout and relevancy of content. </li>"+
                            "<li>Where necessary, adapt the information provided on mobile compared   to desktop/laptop versions with a dedicated mobile version or a   responsive design    "+
                            "<ul>"+
                                "<li>a dedicated mobile version contains content tailored for mobile use. For example, the content may contain fewer content modules, fewer images, or focus on important mobile usage scenarios. </li>"+
                                "<li>a responsive design contains content that stays the same, but CSS   stylesheets are used to render it differently depending on the viewport   width. For example, on narrow screens the navigation menus may be hidden   until the user taps a menu button. </li>"+
                            "</ul>"+
                            "</li>"+
                            "<li>Minimizing the amount of information that is put on each page compared to desktop/laptop versions by providing a dedicated mobile version or a responsive design:    </li>"+
                            "<li>Providing a reasonable default size for content and touch controls. See <a href='#targetSize'>B.2 Touch Target Size and Spacing</a> to minimize the need to zoom in and out for users with low vision. </li>"+
                            "<li> Adapting the length of link text to the viewport width. </li>"+
                            "<li> Positioning form fields below, rather than beside, their labels (in portrait layout) </li>"+
                        "</ul>"
                },
                {
                    id: 1,
                    titulo: "entendible",
                    textoMostrado:
                        ""
                },
                {
                    id: 2,
                    titulo: "operable",
                    textoMostrado: ""
                }
            ]
        };
    },
    computed: {
        filteredSearch() {
            return this.textos.filter((text) =>
                text.textoMostrado.toLowerCase().includes(this.search.toLowerCase())
            );
        },
        construyeAcordeon(){
            return "a"
        }
    }
}