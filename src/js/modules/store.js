import Vue from 'vue';
import Vuex from 'vuex';
import * as config from '../config';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		grid: {
			items: config.dummy,
			spacer: config.spacer
		}
	},
	mutations: {
		
	}
});

export { store };