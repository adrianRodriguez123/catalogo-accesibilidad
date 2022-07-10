import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const elementos = () => {
  return [{
      "plataforma": "android",
      "titulo": "Principios",
      "palabras_clave": "hola",
      "texto":"Claridad: El diseño de las interfaces debe de ser claro y además con diferentes maneras para realizar cada acción"
  }]
};

export default new Vuex.Store({
  state: {
    elementos: elementos(),
    filter: {
        query: '',
        plataforma: true //true = android     false = web
    }
  },
  getters: {
    filteredElements (state){
      console.log("state " + state.palabras_clave)
      let elem = state.elementos.filter(e => e.plataforma === state.filter.plataforma);
      if(state.filter.query.length > 2){
          return elem.filter(e => e.palabras_clave.toLowerCase().includes(state.filter.query))
      }
      return elem;
  }
  },
  mutations: {
    SET_QUERY (state, query){//state se lo pasa automaticamente vuex, query se lo pasamos nosotros
      state.filter.query = query;
    },
    SET_PLATAFORMA (state){
        state.filter.plataforma = !state.filter.plataforma;
    }
  }
})
