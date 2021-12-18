<template>
<v-app>
	<div>
		<router-link to="/">Home</router-link>|
		<router-link to="/about">About</router-link>|

		<!-- NEW - add a route to the profile page -->
		<router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>

		<div v-if="!$auth.loading">
			<!-- show login when not authenticated -->
			<v-btn v-if="!$auth.isAuthenticated" @click="login">Log in</v-btn>
			<!-- show logout when authenticated -->
			<v-btn v-if="$auth.isAuthenticated" @click="logout">Log out</v-btn>
    	</div>
	</div>
	<router-view />
</v-app>
</template>

<script>

export default {
	name: 'App',

	data: () => ({
		
	}),
	methods: {
		login() {
			this.$auth.loginWithRedirect();
		},
		// Log the user out
		logout() {
			this.$auth.logout({
				returnTo: window.location.origin
			});
		}
	},
};
</script>
