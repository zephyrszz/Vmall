import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import Swiper,{Navigation,Pagination,Autoplay} from 'swiper'
Swiper.use([Navigation,Pagination,Autoplay])
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
