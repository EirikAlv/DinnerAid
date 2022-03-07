<template>
    <div>
        <h1>Front</h1>
        <v-btn @click="$router.push('Groceries')">
            Manage
        </v-btn>
        <v-select
            :items="recipe_dropdown_list"
            label="Select recipe"
            :clearable="true"
            @input="dropdown_click" />
        <div v-for="(left, index) in leftovers" :key="index">
            {{ left }}
        </div>
    </div>
</template>

<script>
import {getRefreshToken} from '../helpers/api'

export default {
    data() {
        return {
            selected_recipe: '',
            leftovers: []
        }
    },
    computed: {
        recipe_dropdown_list() {
            return this.$store.state.recipes?.map(x => x.Name);
        },
        recipes() {
            return this.$store.state.recipes;
        },
        groceries() {
            return this.$store.state.groceries;
        }
    },
    methods: {
        dropdown_click(value) {
            this.selected_recipe = value;
            let leftist = this.get_leftovers(value);
            // this.leftovers.push('hey')
        },
        get_leftovers(recipe) {
            let recipe_groceries = this.recipes.find(r => r.Name === recipe).Table;
            recipe_groceries.forEach(rg => {
                let grocery = this.groceries.find(g => g.id === rg.id);
                
                if (grocery.standard_quantity !== rg.amount)
                    this.leftovers.push(rg.norwegian)
            });
        },
    },
}
</script>

<style>

</style>