export default {
    data() {
        //https://stackoverflow.com/questions/62920847/includes-with-filter-in-vue-js
        //https://stackoverflow.com/questions/64512912/use-of-common-methods-within-other-vue-components
        //https://codesandbox.io/s/easy-vuejs-search-icrkf
        //https://codingpotions.com/vue-mixins
        return {
          search: "",
          textos: [
            {
              id: 1,
              titulo: "Principios",
              palabras_clave: "hola",
              texto:"Claridad: El diseño de las interfaces debe de ser claro y además con diferentes maneras para realizar cada acción"
            },
            {
              id: 2,
              titulo: "Requisitos y recomendaciones",
              palabras_clave: "hola",
              texto:"Para que la app tenga un mínimo nivel de accesibilidad debe cumplir las siguientes pautas:"
            },
            {
              id: 3,
              titulo: "Casos especiales",
              palabras_clave: "hola",
              textoMostrado:"Existen algunas situaciones donde se deben de tomar medidas diferentes para garantizar la accesibilidad de una aplicación."
            },
          ]
        };
      },
    computed: {
        filteredSearch() {
            return this.textos.filter((text) => {
              text.textoMostrado.toLowerCase().includes(this.search.toLowerCase());
              }
            );
          },
    }
}