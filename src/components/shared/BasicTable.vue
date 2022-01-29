<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="tableData"
            :items-per-page="5"
            class="elevation-1">
                <template
                    v-for="(column, index) in headers"
                    v-slot:[`item.${column.value}`] = "{ item }">
                    <span :key="index" class="hover-pointer" @click="on_click(item[`${column.value}`])">{{ item[`${column.value}`]}}</span>
                </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: () => [],
            required: true
        },
    },
    data() {
        return {
            
        }
    },
    computed: {
        headers() {
            if (this.tableData[0]) {
                return Object.keys(this.tableData[0])
                    .map(x => {
                        return {
                            text: x,
                            align: 'start',
                            sortable: false,
                            value: x
                        }
                    });
            }
        },
    },
    methods: {
        on_click(item) {
            this.$emit('clickEvent', item);
        }
    },
    
}
</script>

<style scoped>
    .hover-pointer {
        cursor: pointer;
    }
</style>