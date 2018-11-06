/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue/dist/vue.esm';
// import Vue from 'vue';

import TurbolinksAdapter from 'vue-turbolinks';

import ElementUI from 'element-ui';
import '../../assets/stylesheets/vueapp/element-ui-variables.scss';
import locale from 'element-ui/lib/locale/lang/en';
import RailsAjax from '../vue-app/http/http'

import App from '../app.vue';
import SelectCustomTag from '../vue-app/components/element-ui/SelectCustomTag';
import CardForm from '../vue-app/components/CardForm';

Vue.use(TurbolinksAdapter);
Vue.use(ElementUI, {locale});
Vue.use(RailsAjax);

document.addEventListener('turbolinks:load', () => {
    const app = new Vue({
        el        : '[data-app="vue"]',
        components: {
            App,
            SelectCustomTag,
            CardForm
        }
    });
});
