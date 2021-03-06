import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let state = {
    username:'',
    cartCount:0
};
import mutations from './mutation';
import actions from './action';
export default new Vuex.Store({
    state,
    mutations,
    actions
})
