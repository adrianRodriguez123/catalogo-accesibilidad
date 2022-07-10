import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const elementos = () => {
    return [{
    }]
};

export default new Vuex.Store({
    /*state: {//Estado de nuestra aplicación
        elementos: elementos(),
        filter: {
            query: '',
            plataforma: true //true = android     false = web
        }
    },
    mutations: {//Nos permite cambiar el estado de nuestra aplicación, es decir, de los filtros.
        SET_QUERY (state, query){//state se lo pasa automaticamente vuex, query se lo pasamos nosotros
            state.filter.query = query;
        },
        SET_plataforma (state){
            state.filter.plataforma = !state.filter.plataforma;
        }
    },
    getters: {//Nos permite modificar el estado para que sea retornado. Pero en realidad el estado no es modificado, si no que obtenemos una copia.
        /*filteredElements (state){
            let elem = state.elementos.filter(e => e.plataforma == state.filter.plataforma);
            if(state.filter.query.length > 2){
                return elem.filter(e => e.palabras_clave.toLowerCase().includes(state.filter.query))
            }
            return elem;
        }
    }*/
})