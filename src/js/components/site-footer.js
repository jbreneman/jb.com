import Vue from 'vue';

Vue.component('site-footer', {
    computed: {
        home() {
            return window.location.origin;
        }
    },
    template: `
        <footer class="site-footer">
            <nav class="site-nav"></nav>
            <a :href="home" class="site-footer__logo">jessebreneman.com</a>
        </footer>
    `
});