<template>
    <v-data-table
        :headers="headers"
        :items="tableData"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>
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

        }
    },
    methods: {
        
    },
    
}
</script>

<style>

</style>