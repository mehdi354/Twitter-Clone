import Vue from 'vue'
import App from './App.vue'
import './assets/style.scss'
Vue.config.productionTip = false
Vue.filter( 'numberFormattor', (value)=> {
  return Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : Math.sign(value)*Math.abs(value)
})
new Vue({
  render: h => h(App),
}).$mount('#app')
