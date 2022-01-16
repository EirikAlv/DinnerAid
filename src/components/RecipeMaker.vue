<template>
    <div>
        <v-row>
            <v-text-field 
                label="Recipe name"
                v-model="title" />
            <v-btn
                :disabled="!can_save" 
                @click="save_recipe" >
                Save
            </v-btn>
        </v-row>
        <BasicTable 
            :tableData="mapped_groceries"
            @clickEvent="add_to_order" />
        <ShoppingListEditor 
            v-model="orders"/>
    </div>
</template>

<script>
import { make_grocery_table_list } from '../helpers/FoodHelper'
import { save_recipe } from '../helpers/api'
import BasicTable from '../components/BasicTable.vue'
import ShoppingListEditor from '../components/ShoppingListEditor.vue'

export default {
    components: {
        BasicTable,
        ShoppingListEditor,
    },
    data() {
        return {
            title: '',
            orders: []
        }
    },
    computed: {
        mapped_groceries() {
            return make_grocery_table_list(this.$store.state.groceries);
        },
        can_save() {
            return this.title !== '' && this.orders.length > 0 && !this.name_exists;
        },
        name_exists() {
            if (this.recipeNames) {
                return this.recipe_names.some(x => this.title.toLowerCase() === x.toLowerCase());
            }
            return false;
        },
        recipe_names() {
            return this.$store.state.recipes.map(x => x.Name);
        }
    },
    methods: {
        add_to_order(food) {
            let grocery = this.$store.state.groceries.find(g => g.norwegian === food);
            grocery.amount = grocery.standard_quantity;
            this.orders.push(grocery);
        },
        save_recipe: async function() {
            let obj = {
                'Name': this.title,
                'GroceryTable': this.orders
            }

            const token = await this.$auth.getTokenSilently();
            await save_recipe(obj, token);

            this.title = '';
            this.orders = [];
            this.$store.dispatch('a_refresh_store', token);
            this.$emit('doneMaking');
        }
        
    },
}
</script>

<style>

</style>