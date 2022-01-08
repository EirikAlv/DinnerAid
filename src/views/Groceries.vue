<template>
    <div v-if="$store.state.groceries">
        <h1>This is groceries</h1>
        <div v-if="table">
            <BasicTable 
                v-if="table"
                :tableData="table" />
        </div>

    </div>
</template>

<script>
import { make_grocery_table_list } from '../helpers/FoodHelper'
import BasicTable from '../components/BasicTable.vue'

export default {
    components: {
        BasicTable,
    },
    computed: {
        table() {
            return make_grocery_table_list(this.$store.state.groceries);
        },
        headers() {
            if (this.table[0]) {
                Object.keys(this.table[0]);
            }
            
        }
    },
}
</script>

<style>

</style>