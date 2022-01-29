<template>
    <div>
        <BasicTable 
            :tableData="current_recipe_groceries" />
        <AccessWrapper :AccessRoles="['Admin']">
            <v-btn @click="order">
                Order
            </v-btn>
        </AccessWrapper>
    </div>
</template>

<script>
import { makeRecipeTableWithAmount } from '../helpers/FoodHelper'
import { orderToTodo } from '../helpers/api'
import BasicTable from './shared/BasicTable.vue'
import AccessWrapper from '../components/AccessWrapper.vue'

export default {
    components: {
        BasicTable,
        AccessWrapper
    },
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    computed: {
        current_recipe_groceries() {
            return makeRecipeTableWithAmount(this.$store.state.recipes.find(x => x.Name === this.title)?.Table);
        },
        localGroceries() {
            return [...this.$store.state.recipes.find(x => x.Name === this.title).Table];
        }
    },
    methods: {
        order: async function() {
            const token = await this.$auth.getTokenSilently();

            await orderToTodo(this.localGroceries, token)
        }
    },
}
</script>

<style>

</style>