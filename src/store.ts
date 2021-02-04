import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
	state: {
		userName: 'USER'
	},
	getters: {
		getuserName: state => state.userName
	},
	mutations: {
		setuserName ( state, userName ) {
			state.userName = userName
		}
	},
	actions: {}
} )
