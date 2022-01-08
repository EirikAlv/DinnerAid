<template>
    <BasicTable 
        :tableData="current_recipe_groceries" />
</template>

<script>
import { makeRecipeTableWithAmount } from '../helpers/FoodHelper'
import BasicTable from '../components/BasicTable.vue'

export default {
    components: {
        BasicTable,
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
        }
    },
}
</script>

<style>

</style>