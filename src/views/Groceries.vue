<template>
    <div v-if="$store.state.groceries">
        <h1>This is groceries</h1>
        <div v-if="table">
            <BasicTable 
                v-if="table"
                :tableData="table"
                @clickEvent="start_editing($event)" />
        </div>

        <v-btn @click="is_creating = true">
            Create grocery
        </v-btn>
        
        <GroceryMaker
            v-if="is_creating || is_editing"
            :selected_grocery="selected_grocery"
            @done="stop_editing" />

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