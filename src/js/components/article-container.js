import Vue from 'vue';

Vue.component('article-container', {
    props: ['article'],
    computed: {
        title() {
            const title = this.article.data['post.title'] || this.article.data['project.title'];
            return title.value;
        }
    },
    template: `
        <transition name="full-screen">
            <article class="article" v-if="article.active">
                {{ title }}
            </article>
        </transition>
    `
});