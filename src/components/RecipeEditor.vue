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
                    <!-- <BasicTable 
                        :tableData="mapped_groceries"
                        @clickEvent="add_to_order" /> -->
                    <span>Add groceries:</span>
                    <DynamicTable 
                        :tableData="mapped_groceries"
                        @clickEvent="add_to_order($event)"/>
                    <ShoppingListEditor
                        v-model="orders" />
                    <v-btn
                        :disabled="!hasChanged || !correctAmount" 
                        @click="save_recipe">
                        Save
                    </v-btn>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { make_grocery_table_list } from '../helpers/FoodHelper'
import { edit_recipe } from '../helpers/api'
import BasicTable from './shared/BasicTable.vue'
import ShoppingListEditor from '../components/ShoppingListEditor.vue'
import DynamicTable from '../components/shared/DynamicTable.vue'

export default {
    components: {
        BasicTable,
        ShoppingListEditor,
        DynamicTable,
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
            orders: [],
            originalRecipeGroceries: [],
        }
    },
    mounted () {
        this.loadForm(this.title);
    },
    watch: {
        title(newValue) {
            this.loadForm(newValue);
        }
    },
    computed: {
        mapped_groceries() {
            return make_grocery_table_list(this.$store.state.groceries);
        },
        hasChanged() {
            let flatOrders = this.orders.flatMap(x => Object.values(x)).sort();
            let flatOriginals = this.originalRecipeGroceries.flatMap(x => Object.values(x)).sort();
            return flatOrders.some((x, i) => `${x}` !== `${flatOriginals[i]}`);
        },
        correctAmount() {
            let amounts = this.orders.map(x => parseInt(x.amount));
            return amounts.every(a => !isNaN(a));
        }
    },
    methods: {
        add_to_order(food) {
            const found = this.orders.find(o => o.norwegian === food);
            if (found) 
                return

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
            this.loadForm(this.title);
        },
        loadForm(recipeName) {
            this.orders = this.$store.state.recipes.find(x => x.Name === recipeName).Table;
            this.originalRecipeGroceries = JSON.parse(JSON.stringify(this.orders));
        }
    },
}
</script>

<style>

</style>