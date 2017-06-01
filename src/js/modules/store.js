import Vue from 'vue';
import Vuex from 'vuex';
import * as config from '../config';
import Prismic from 'prismic.io';

Vue.use(Vuex);

const fill = { data: { 'post.title': { value: null } }, type: 'post' };

Prismic.api('https://jessebrenemancom.prismic.io/api').then(function(api) {
	return api.query('', { pageSize : 20, page : 1 });
}).then(function(res) {
	if (res.results === 20) {
		store.state.grid.items = res.results;
	} else {
		store.state.grid.items = [].concat(res.results).concat(new Array(20 - res.results.length).fill(fill));
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
			colors: ['#0272a4', '#004052', '#013743', '#ff8d09', '#ec540b']
		}
	},
	mutations: {
		
	}
});

export { store };