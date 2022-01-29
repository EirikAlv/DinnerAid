<template>
    <div>
        <BasicTable
            v-if="!mobile"
            :tableData="tableData"
            @clickEvent="$emit('clickEvent', $event)" />
        <v-select
            v-if="mobile"
            :items="headers"
            label="Sections"
            v-model="selected_section" />
        <BasicList 
            v-if="mobile && selected_section.length > 0"
            :listData="list_data" />
    </div>
</template>

<script>
import BasicTable from './BasicTable.vue'
import BasicList from './BasicList.vue'

export default {
    components: {
        BasicTable,
        BasicList,
    },
    props: {
        tableData: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            selected_section: ''
        }
    },
    computed: {
        mobile() {
            return this.$vuetify.breakpoint.xs
        },
        headers() {
            if (!this.tableData[0]) 
                return

            return Object.keys(this.tableData[0]);
        },
        list_data() {
            return this.tableData.map(item => item[this.selected_section]);
        }
    },
}
</script>

<style>

</style>