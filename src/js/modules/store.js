import Vue from 'vue';
import Vuex from 'vuex';
import * as config from '../config';
import Prismic from 'prismic.io';

Vue.use(Vuex);

const fill = { data: { 'post.title': { value: null } }, type: 'post' };

Prismic.api('https://jessebrenemancom.prismic.io/api').then(function(api) {
	return api.query('', { pageSize : 20, page : 1 });
}).then(function(res) {
	if (res.results === 24) {
		store.state.grid.items = res.results;
	} else {
		store.state.grid.items = [...res.results, ...(new Array(24 - res.results.length).fill(fill))];
	}
	console.info(res.results);
}, function(err) {
	console.log('Something went wrong: ', err);
});

const store = new Vuex.Store({
	state: {
		grid: {
			items: [],
			spacer: config.spacer,
			colors: ['#00A0B0', '#6A4A3C', '#CC333F', '#EB6841', '#EDC951']
		}
	},
	mutations: {
		
	}
});

export { store };