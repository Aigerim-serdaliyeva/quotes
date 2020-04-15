import Vue from 'vue';
import Vuex from 'vuex';
import { quotes } from './quotes';
import { alert } from './alert'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        quotes,
        alert
    }
})