<template>
    <div>
        <slot v-if="hasAccess"></slot>
    </div>
    
</template>

<script>
export default {
    props: {
        AccessRoles: {
            type: Array,
            default: () => []
        },
    },
    computed: {
        hasAccess() {
            return this.AccessRoles.every(role => this.roles?.includes(role));
        },
        user() {
            return this.$auth.user;
        },
        roles() {
            return this.user[`${process.env.VUE_APP_APIBASEURL}/roles`];
        }
    },
}
</script>

<style>

</style>