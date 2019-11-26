import Vue from 'vue'
import App from './App.vue'
import Dialog from './components/dialog.vue'

Vue.component('v-dialog', Dialog)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
