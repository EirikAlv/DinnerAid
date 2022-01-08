<template>
    <div>
        <h1>This is recipes</h1>
        <v-select
          :items="recipe_dropdown_list"
          label="Select recipe"
          :clearable="true"
          @input="dropdown_click" />
        <DisplayRecipe 
            v-if="dropdown_selected"
            :title="dropdown_selected" />
    </div>
</template>

<script>
import DisplayRecipe from '../components/DisplayRecipe.vue'

export default {
    data() {
        return {
            dropdown_selected: null
        }
    },
    components: {
        DisplayRecipe,
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