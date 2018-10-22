/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        token: null,
        title: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            sessionStorage.token=data
            state.token = data;
        },
        [types.LOGOUT]: (state) => {
            sessionStorage.removeItem('token');
            state.token = null;
            sessionStorage.removeItem('title');
            state.title = '';
        },
        [types.TITLE]: (state, data) => {
            sessionStorage.title=data;
            state.title = data;
        }
    }
})