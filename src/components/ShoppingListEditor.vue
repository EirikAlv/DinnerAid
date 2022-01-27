<template>
    <div>
        <v-container>
            <v-row 
                v-for="(n, i) in fooTable"
                :key="i + 1"
                justify="start" >
                <v-col
                    v-for="(k, idx) in n"
                    :key="i + 1 * idx"
                    md="4" >
                    <v-card class="pa-2">

                        <div class="flex-row flex-align-base justify-center">
                            <!-- <v-spacer></v-spacer> -->
                            <span class="w-7em text-align-r mr-5p">
                                {{ k.norwegian }}
                            </span>
                            
                            <span class="w-3em mr-3p">
                                <v-text-field
                                    class="input-text-align-r"
                                    dense
                                    v-model="k.amount" >
                                </v-text-field>
                            </span>
                            <span class="text-align-l w-2em">
                                {{ k.uom }}
                            </span>
                            <div>
                                <v-icon
                                    dense
                                    color="red"
                                    @click="remove_from_table(k)" >
                                    mdi-trash-can
                                </v-icon>
                            </div>
                            
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            tableData: this.value,
            numberOfColumns: 3,
        }
    },
    watch: {
        value(newValue) {
            this.tableData = newValue;
        }
    },
    computed: {
        rowCount() {
            let rows = Number.parseInt(this.tableData.length / this.numberOfColumns);
            let rest = this.tableData.length % this.numberOfColumns; 
            
            return rest > 0 ? rows + 1 : rows;
        },
        fooTable() {
            let table = [];
            for (let i = 0; i < this.tableData.length; i += this.numberOfColumns) {
                table.push(this.tableData.slice(i, i + this.numberOfColumns));
            }

            return table;
        }
    },
    methods: {
        remove_from_table(item) {
            this.tableData = [...this.tableData.filter(x => x.norwegian !== item.norwegian)]
            this.$emit('input', this.tableData)
        }
    },
}
</script>

<style scoped>


</style>