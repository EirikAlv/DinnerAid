<template>
    <v-list>
        <template v-for="(item, index) in tableData">
            <div
                class="flex-row"
                :key="index">
                <v-icon
                    class="margin-right"
                    dense
                    color="red"
                    @click="remove_from_table(item)" >
                    mdi-minus
                </v-icon>
                <span
                    class="margin-right">{{ item.norwegian }}</span>
                <span class="text-field">
                    <v-text-field
                        label="Amount"
                        outlined
                        v-model="item.amount" >
                    </v-text-field>
                </span>
            </div>
        </template>
    </v-list>
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
            tableData: this.value
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
.text-field {
    width: 10%;
}
.flex-row {
    display: flex;
    align-items: baseline;
}
.margin-right {
    margin-right: 1%;
}

</style>