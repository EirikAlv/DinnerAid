<template>
    <div v-if="$store.state.groceries">
        <GroceryMaker            
            :selected_grocery="selected_grocery"
            @done="stop_editing" />
        <div v-if="table">
            <DynamicTable 
                :tableData="table"
                @clickEvent="start_editing($event)"/>
        </div>        
    </div>
</template>

<script>
import { make_grocery_table_list } from '../helpers/FoodHelper'
import BasicTable from '../components/shared/BasicTable.vue'
import GroceryMaker from '../components/GroceryMaker.vue'
import DynamicTable from '../components/shared/DynamicTable.vue'

export default {
    components: {
        BasicTable,
        GroceryMaker,
        DynamicTable,
    },
    data() {
        return {
            is_creating: false,
            is_editing: false,
            selected_grocery: {},
        }
    },
    computed: {
        table() {
            return make_grocery_table_list(this.$store.state.groceries);
        }
    },
    methods: {
        stop_editing() {
            this.is_creating = false;
            this.is_editing = false;
            this.selected_grocery = {};
        },
        start_editing(item) {
            this.is_editing = true;
            this.selected_grocery = this.$store.state.groceries.find(x => x.norwegian === item);
        }
    },
}
</script>

<style>

</style>