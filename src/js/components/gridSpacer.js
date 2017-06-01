import Vue from 'vue';

Vue.component('grid-spacer', {
    props: ['item'],
    computed: {
        styles() {
            return {
                'grid-column': `${ this.item.offset.column } / span ${ this.item.size.width }`,
                'grid-row': `${ this.item.offset.row } / span ${ this.item.size.height }`,
                'padding-bottom': `${ this.item.size.height / this.item.size.width * 100 }%`
            };
        }
    },
    template: `
        <section class="grid-spacer" :style="styles">
        </section>
    `
});