import Vue from 'vue'
// import axios, { AxiosInstance } from 'axios'
import { Message, Modal } from 'view-design'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css'
import './style/index.scss'

Vue.config.productionTip = false

Vue.use( v => {
	// v.prototype.$axios = axios
	v.prototype.$Message = Message
	v.prototype.$Modal = Modal
} )

// declare module 'Vue/types/vue' {
//   interface Vue {
//     $axios: AxiosInstance
//   }
// }

new Vue( {
	router,
	store,
	render: h => h( App )
} ).$mount( '#app' )
