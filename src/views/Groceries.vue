<template>
    <div v-if="$store.state.groceries">
        <h1>This is groceries</h1>
        <div v-if="table">
            <BasicTable 
                v-if="table"
                :tableData="table" />
        </div>
        <GroceryMaker />

    </div>
</template>

<script>
import { make_grocery_table_list } from '../helpers/FoodHelper'
import BasicTable from '../components/BasicTable.vue'
import GroceryMaker from '../components/GroceryMaker.vue'

export default {
    components: {
        BasicTable,
        GroceryMaker,
    },
    computed: {
        table() {
            return make_grocery_table_list(this.$store.state.groceries);
        }
    },
}
</script>

<style>

</style>