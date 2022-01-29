<template>
    <v-card flat>
        <v-list-item
            v-for="(item, index) in list" :key="index">
            <span> {{ item }} </span>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    props: {
        listData: {
            type: Array,
            default: () => []
        },
    },
    computed: {
        list() {
            return this.listData.filter(item => item.length > 0);
        }
    },

}
</script>

<style>

</style>