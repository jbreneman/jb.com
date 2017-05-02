'use strict';

import Vue from 'vue';
import { store } from './modules/store';
import * as config from './config';
import './components/grid';

const vm = new Vue({
	el: '#app',
	store,
	template: `
		<div id="app" class="timer">
			<grid></grid>
		</div>
	`
});