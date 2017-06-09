'use strict';

import Vue from 'vue';
import { store } from './modules/store';
import * as config from './config';
import './components/grid';
import './components/site-footer';

const vm = new Vue({
	el: '#app',
	store,
	template: `
		<div id="app" class="wrapper">
			<grid></grid>
			<site-footer></site-footer>
		</div>
	`
});