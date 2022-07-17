import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import TabsPlugin from 'bootstrap-vue'

import elements from './elements.js'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.use(TabsPlugin)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')