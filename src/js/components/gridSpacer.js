import Vue from 'vue';

Vue.component('grid-spacer', {
    props: ['item'],
    computed: {
        thisClass() {
            return `size--${ this.item.size }`;
        }
    },
    template: `
        <section class="grid-spacer" :class="thisClass">
        </section>
    `
});