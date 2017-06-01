import Vue from 'vue';
import Color from 'color';

function randomClass(classes) {
	if(Math.random() > .6) {
		return classes[Math.floor(Math.random() * classes.length)];
	}
	return '1x1';
}

Vue.component('grid-item', {
    props: ['item'],
    computed: {
    	thisClass() {
    		const classNames = ['1x2', '2x2', '2x1', '1x3', '2x3', '3x3', '3x2', '3x1'];
    		//const classNames = ['2x1', '3x1', '4x1'];
    		return `size--${ randomClass(classNames) }`;
    	},
    	backgroundColor() {
    		const colors = this.$store.state.grid.colors;
    		return colors[Math.floor(Math.random() * colors.length)];
    	},
    	foregroundColor() {
    		return Color(this.backgroundColor).light() ? '#000000' : '#ffffff';
    	},
    	title() {
    		return this.item.data[this.item.type + '.title'].value;
    	},
    	url() {
    		return this.item.slug ? `posts/${ this.item.slug }/` : null;
    	},
    	image() {
    		return this.item.data[this.item.type + '.preview-image'] ? `url(${ this.item.data[this.item.type + '.preview-image'].value.main.url })` : null;
    	}
    },
    methods: {
    	loadPage() {
    		console.log('load page');
    	}
    },
    template: `
        <a :href="url" @click.prevent="loadPage()" class="grid-item" :class="thisClass" :style="{ backgroundColor: backgroundColor, color: foregroundColor, 'background-image': image }">
            <span class="grid-item__title" v-if="title">{{ title }}</span>
        </a>
    `
});