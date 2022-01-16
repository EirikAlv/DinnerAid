<template>
    <div>
        <h1>This is recipes</h1>
        <v-btn 
            v-if="!is_creating"
            @click="is_creating = true" >
            Create recipe
        </v-btn>
        <v-select
            v-if="!is_creating"
            :items="recipe_dropdown_list"
            label="Select recipe"
            :clearable="true"
            @input="dropdown_click" />
        <DisplayRecipe 
            v-if="dropdown_selected && !is_creating"
            :title="dropdown_selected" />
        <RecipeMaker
            v-if="is_creating"
            @doneMaking="is_creating = false" />
    </div>
</template>

<script>
import DisplayRecipe from '../components/DisplayRecipe.vue'
import RecipeMaker from '../components/RecipeMaker.vue'

export default {
    components: {
        DisplayRecipe,
        RecipeMaker,
    },
    data() {
        return {
            dropdown_selected: null,
            is_creating: false,
        }
    },
    computed: {
        recipe_dropdown_list() {
            return this.$store.state.recipes?.map(x => x.Name);
        }
    },
    methods: {
        dropdown_click(value) {
            this.dropdown_selected = value;
        }
    },

}
</script>

<style>

</style>