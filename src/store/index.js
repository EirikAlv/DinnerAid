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
	},
	modules: {
	}
})
