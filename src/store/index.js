import Vue from 'vue'
import Vuex from 'vuex'
import { get_groceries, get_all_recipes, getUOM }  from '../helpers/api'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		groceries: [],
        recipes: [],
        uom: [],
	},
	mutations: {
		m_set_groceries(state, payload) {
            state.groceries = payload.data;
            state.groceries.slice();
        },
		m_set_recipes(state, payload) {
            state.recipes = payload.data;
            state.recipes.slice();
        },
        m_set_uom(state, payload) {
            state.uom = payload.data;
            state.uom.slice();
        }
	},
	actions: {
		a_load_groceries: async function(context, token) {
            let groc = await get_groceries(token); 
            this.commit('m_set_groceries', {data: groc});
        },
		a_load_recipes: async function(context, token) {
            let rec = await get_all_recipes(token);
            this.commit('m_set_recipes', {data: rec});
        },
        a_load_UOM: async function(context, token) {
            let uom = await getUOM(token);
            this.commit('m_set_uom', {data: uom});
        },
        a_refresh_store: async function(context, token) {
            let groc = await get_groceries(token); 
            let rec = await get_all_recipes(token);
            let uom = await getUOM(token);
            this.commit('m_set_groceries', {data: groc});
            this.commit('m_set_recipes', {data: rec});
            this.commit('m_set_uom', {data: uom});
        }
	},
    getters: {
        grocery_sections(state) {
            return state.groceries.map(x => x.section).filter((v, i, a) => a.indexOf(v) === i);
        }
    },
	modules: {
	}
})
