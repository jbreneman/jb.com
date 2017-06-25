import Vue from 'vue';
import Vuex from 'vuex';
import * as config from '../config';
import Prismic from 'prismic.io';

Vue.use(Vuex);

const fill = { data: { 'post.title': { value: null } }, type: 'post', active: false };

Prismic.api('https://jessebrenemancom.prismic.io/api').then(function(api) {
	return api.query('', { pageSize : 20, page : 1 });
}).then(function(res) {
	let items;
	if (res.results === 24) {
		items = res.results.map((item, index) => {
			item.active = false;
			item.index = index;
			return item;
		});
	} else {
		items = [...res.results, ...(new Array(24 - res.results.length).fill(fill))].map((item, index) => {
			item.active = false;
			item.index = index;
			return item;
		});
	}
	store.state.grid.items = items;
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
		changePage: function(state, mutation) {
			state.grid.items = state.grid.items.map(item => Object.assign({}, item, { active: mutation.index === item.index }));
		}
	}
});

export { store };