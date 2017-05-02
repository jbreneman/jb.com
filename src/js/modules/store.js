import Vue from 'vue';
import Vuex from 'vuex';
import * as config from '../config';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		grid: {
			items: config.dummy,
			spacer: config.spacer,
			colors: ['#0272a4', '#004052', '#013743', '#ff8d09', '#ec540b', '#fbe8a4', '#f5eab2']
		}
	},
	mutations: {
		
	}
});

export { store };