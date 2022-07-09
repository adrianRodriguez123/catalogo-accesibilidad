import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const elementos = () => {
    return [{
        "plataforma": "android",
        "titulo": "Principios",
        "palabras_clave": "",
        "texto":""
    }]
}

export default new Vuex.Store({
    state: {//Estado de nuestra aplicación
        elementos: elementos(),
        filter: {
            query: ''
        }
    },
    mutations: {//Nos permite cambiar el estado de nuestra aplicación, es decir, de los filtros.
        SET_QUERY (state, query){//state se lo pasa automaticamente vuex, query se lo pasamos nosotros
            state.filter.query = query;
        }
    },
    getters: {//Nos permite modificar el estado para que sea retornado. Pero en realidad el estado no es modificado, si no que obtenemos una copia.
        filteredElements (state){
            if(state.filter.query.length > 2){
                return elementos.filter(elemento => elemento.palabras_clave.toLowerCase().includes(state.filter.query))
            }
            return elementos;
        }
    }
})