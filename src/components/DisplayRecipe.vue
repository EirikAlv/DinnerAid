<template>
    <div>
        <AccessWrapper :AccessRoles="['Admin']">
            <v-btn @click="order">
                Order
            </v-btn>
        </AccessWrapper>
        <v-list class="mt-3p">
            <v-list-item v-for="(grocery, index) in current_recipe_groceries" :key="index">
                <div class="flex-row justify-end w-100p" v-bind:class="!mobile ? 'mlr-10p' : ''">
                    <span class="flex-grow-1 text-align-l mr-3p">
                        {{ grocery.Name }}
                    </span>
                    <span class="text-align-r mr-3p">
                        {{ grocery.Amount }}
                    </span>
                    <span class="w-5p">
                        {{ grocery.UOM }}
                    </span>
                </div>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import { orderToTodo } from '../helpers/api'
import BasicTable from './shared/BasicTable.vue'
import AccessWrapper from '../components/AccessWrapper.vue'

export default {
    components: {
        BasicTable,
        AccessWrapper
    },
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    computed: {
        current_recipe_groceries() {
            return this.$store.state.recipes
                .find(x => x.Name === this.title)?.Table
                .map(g => {
                    return {
                        Name: g.norwegian,
                        Amount: g.amount,
                        UOM: g.uom
                    }
                });
        },
        localGroceries() {
            return [...this.$store.state.recipes.find(x => x.Name === this.title).Table];
        },
        mobile() {
            return this.$vuetify.breakpoint.xs
        },
    },
    methods: {
        order: async function() {
            const token = await this.$auth.getTokenSilently();

            await orderToTodo(this.localGroceries, token)
        }
    },
}
</script>

<style>

</style>