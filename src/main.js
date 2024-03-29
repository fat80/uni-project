import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import 'vue-i18n'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import './assets/scss/style.css'
import './components/axios'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,

    render: h => h(App)
}).$mount('#app')