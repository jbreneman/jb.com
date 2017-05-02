import Vue from 'vue';

function randomClass(classes) {
	if(Math.random() > .5) {
		return classes[Math.floor(Math.random() * classes.length)];
	}
	return '1x1';
}

Vue.component('grid-item', {
    props: ['item'],
    computed: {
    	thisClass() {
    		const classNames = ['1x2', '2x2', '2x1', '1x3', '2x3', '3x3', '3x2', '3x1'];
    		return `size--${ randomClass(classNames) }`;
    	}
    },
    template: `
        <section class="grid-item" :class="thisClass">
            <span class="grid-item__title" v-if="item.message">{{ item.message }}</span>
        </section>
    `
});