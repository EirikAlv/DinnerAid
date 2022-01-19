<template>
    <v-dialog
        v-model="dialog">
        <template v-slot:activator="{ on, attrs}">
            <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on">
                Edit recipe
            </v-btn>
        </template> 
        <v-card>
            <v-card-title>
                <span class="text-h5">{{`Edit recipe ${title}` }}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <BasicTable 
                        :tableData="mapped_groceries"
                        @clickEvent="add_to_order" />
                    <ShoppingListEditor
                        v-model="orders" />
                    <v-btn @click="save_recipe">
                        Save
                    </v-btn>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { makeRecipeTableWithAmount, make_grocery_table_list } from '../helpers/FoodHelper'
import { edit_recipe } from '../helpers/api'
import BasicTable from '../components/BasicTable.vue'
import ShoppingListEditor from '../components/ShoppingListEditor.vue'

export default {
    components: {
        BasicTable,
        ShoppingListEditor,
    },
    props: {
        title: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            dialog: false,
            orders: {},
        }
    },
    mounted () {
        this.orders = this.$store.state.recipes.find(x => x.Name === this.title).Table;
    },
    computed: {
        current_recipe_groceries() {
            return makeRecipeTableWithAmount(this.$store.state.recipes.find(x => x.Name === this.title)?.Table);
        },
        mapped_groceries() {
            return make_grocery_table_list(this.$store.state.groceries);
        },
    },
    methods: {
        add_to_order(food) {
            let grocery = this.$store.state.groceries.find(g => g.norwegian === food);
            grocery.amount = grocery.standard_quantity;
            this.orders.push(grocery);
        },
        save_recipe: async function() {
            const token = await this.$auth.getTokenSilently();

            let obj = {
                'Name': this.title,
                'GroceryTable': this.orders
            }
            await edit_recipe(obj, token);
            await this.$store.dispatch('a_refresh_store', token);
            this.dialog = false;
        }
    },
}
</script>

<style>

</style>