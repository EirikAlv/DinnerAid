<template>
    <div>
        <v-btn
            v-if="!is_creating"
            @click="is_creating = true" >
            Create recipe
        </v-btn>
        <RecipeEditor
            v-if="dropdown_selected && !is_creating"
            :title="dropdown_selected"
            @cancel="is_editing = false" />
        <v-btn 
            v-if="dropdown_selected && !is_creating"
            @click="delete_recipe" >
            Delete
        </v-btn>
        <v-select
            v-if="!is_creating"
            :items="recipe_dropdown_list"
            label="Select recipe"
            :clearable="true"
            @input="dropdown_click" />
        <DisplayRecipe
            v-if="dropdown_selected && !is_creating && !is_editing"
            :title="dropdown_selected" />
        <RecipeMaker
            v-if="is_creating"
            @doneMaking="is_creating = false" />
    </div>
</template>

<script>
import DisplayRecipe from '../components/DisplayRecipe.vue'
import RecipeMaker from '../components/RecipeMaker.vue'
import RecipeEditor from '../components/RecipeEditor.vue'
import { delete_recipe } from '../helpers/api'


export default {
    components: {
        DisplayRecipe,
        RecipeMaker,
        RecipeEditor,
    },
    data() {
        return {
            dropdown_selected: null,
            is_creating: false,
            is_editing: false
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
        },
        delete_recipe: async function() {
            const token = await this.$auth.getTokenSilently();

            await delete_recipe({'Name': this.dropdown_selected}, token);
            this.dropdown_selected = null;
            this.$store.dispatch('a_refresh_store', token);

        }
    },

}
</script>

<style>

</style>