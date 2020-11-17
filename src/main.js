import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import Swiper,{Navigation,Pagination,Autoplay} from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Swiper.use([Navigation,Pagination,Autoplay])
Vue.use(VueAwesomeSwiper)
import 'swiper/swiper-bundle.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
