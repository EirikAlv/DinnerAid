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
            v-model="grocery.uom" />
        <v-btn
            @click="save_grocery"
            :disabled="!can_save">
            Save
        </v-btn>
        <v-btn @click="cancel" >
            Cancel
        </v-btn>
    </v-form>
</template>

<script>
import { save_grocery, edit_grocery } from '../helpers/api'

export default {
    props: {
        selected_grocery: {
            type: Object,
            default: () => {},
            required: false
        },
    },
    data() {
        return {
            groceryTemplate: {norwegian: '', english: '', section: '', uom: '', standard_quantity: '' },
            grocery: {},
            original_grocery: {},
            is_editing: false
        }
    },
    mounted () {
        if (this.selected_grocery?.norwegian) {
            this.is_editing = true;
            this.original_grocery = {...this.selected_grocery};
            this.grocery = {...this.selected_grocery};
        } else {
            this.is_editing = false;
            this.original_grocery = {};
            this.grocery = {...this.groceryTemplate};
        }
    },
    watch: {
        selected_grocery(newValue) {
            if (newValue?.norwegian) {
                this.is_editing = true;
                this.original_grocery = {...newValue};
                this.grocery = {...newValue};
            } else {
                this.original_grocery = {};
                this.is_editing = false;
            }
        }
    },
    computed: {
        can_save() { // TODO: consider editing groceries
            return this.grocery.English !== ''
                && this.grocery.Norwegian !== ''
                && this.grocery.Section !== ''
                && this.grocery.uom !== ''
                && this.grocery.standard_quantity !== ''
        }
    },
    methods: {
        save_grocery: async function() {
            const token = await this.$auth.getTokenSilently();

            if (this.is_editing) {
                await edit_grocery({ original: this.original_grocery, edited: this.grocery }, token);
            } else {
                await save_grocery(this.grocery, token);
            }

            this.$store.dispatch('a_refresh_store', token);     
            this.grocery = {...this.groceryTemplate};
            this.$emit('done');
        },
        cancel() {
            this.is_editing = false;
            this.$emit('done');
        }
    },
}
</script>

<style>

</style>