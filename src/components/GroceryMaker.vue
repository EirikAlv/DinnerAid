<template>
    <v-form>
        <v-select 
            :items="$store.getters.grocery_sections"
            label="Sections"
            v-model="grocery.section" />
        <v-text-field 
            label="Norwegian"
            v-model="grocery.norwegian" />
        <v-text-field 
            label="English"
            v-model="grocery.english" />
        <v-text-field 
            label="Standard quantity"
            v-model="grocery.standard_quantity" />
        <v-select 
            :items="$store.state.uom.map(x => x.name)"
            label="Unit of mesure"
            v-model="grocery.unit_of_mesure" />
        <v-btn
            @click="save_grocery"
            :disabled="!can_save">
            Save
        </v-btn>
    </v-form>
</template>

<script>
import { save_grocery } from '../helpers/api'

export default {
    data() {
        return {
            groceryTemplate: {norwegian: '', english: '', section: '', unit_of_mesure: '', standard_quantity: '' },
            grocery: {}
        }
    },
    mounted () {
        this.grocery = {...this.groceryTemplate};
    },
    computed: {
        can_save() {
            return this.grocery.English !== ''
                && this.grocery.Norwegian !== ''
                && this.grocery.Section !== ''
                && this.grocery.unit_of_mesure !== ''
                && this.grocery.standard_quantity !== ''
        }
    },
    methods: {
        save_grocery: async function() {
            await save_grocery(this.grocery);
            const token = await this.$auth.getTokenSilently();
            this.$store.dispatch('a_refresh_store', token);
            this.grocery = {...this.groceryTemplate};
        },
    },
}
</script>

<style>

</style>