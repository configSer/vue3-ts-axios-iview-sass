import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/layout.vue'

Vue.use( Router )


export default new Router( {
	// mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'layout',
			component: Layout,
			redirect: '/home',
			children: [
				{
					path: '/home',
					name: 'home',
					component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
				},
				{
					path: '/about',
					name: 'about', // route level code-splitting
					// this generates a separate chunk (about.[hash].js) for this route
					// which is lazy-loaded when the route is visited.
					component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
				},
			]
		},
		{
			path: '/login',
			name: 'login',
			component: () => import(/* webpackChunkName: "login" */ './login.vue')
		}
		]
} )
