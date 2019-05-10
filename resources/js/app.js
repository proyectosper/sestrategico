/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('prueba-component', require('./components/PruebaComponent.vue').default);
Vue.component('form-component', require('./components/FormComponent.vue').default);
Vue.component('cursos-component', require('./components/CursosComponent.vue').default);

const app = new Vue({
    el: '#app',
});
