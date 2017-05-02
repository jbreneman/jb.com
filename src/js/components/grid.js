import Vue from 'vue';
import './gridItem';
import './gridSpacer';

Vue.component('grid', {
	computed: {
		grid() {
			return this.$store.state.grid;
		}
	},
    template: `
        <section class="grid">
        	<grid-spacer v-for="item in grid.spacer" :item="item"></grid-spacer>
            <grid-item v-for="item in grid.items" :item="item"></grid-item>
        </section>
    `
});