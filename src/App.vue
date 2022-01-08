<template>
<v-app>
	<div>
		<router-link to="/">Home</router-link>|
		<router-link to="/about">About</router-link>|
		<router-link to="/recipes">Manage Recipes</router-link>|

		<!-- NEW - add a route to the profile page -->
		<router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>

		<div v-if="!$auth.loading">
			<!-- show login when not authenticated -->
			<v-btn v-if="!$auth.isAuthenticated" @click="login">Log in</v-btn>
			<!-- show logout when authenticated -->
			<v-btn v-if="$auth.isAuthenticated" @click="logout">Log out</v-btn>
    	</div>
	</div>
	<div v-if="$auth.isAuthenticated">
		<router-view />
	</div>
</v-app>
</template>

<script>

export default {
	name: 'App',
	watch: {
		isAuthenticated(newValue) {
			if (newValue && this.authLoaded) {
				this.load_data();
			}
		},
		authLoading(newValue) {
			if (!newValue) {
				if (!this.$auth.isAuthenticated) {
					this.login();
				}
			}
		}
	},
	computed: {
		authLoaded() {
			return this.$auth.auth0Client;
		},
		isAuthenticated() {
			return this.$auth.isAuthenticated && !this.$auth.loading;
		},
		authLoading() {
			return this.$auth.loading;
		}
	},
	methods: {
		login() {
			this.$auth.loginWithRedirect();
		},
		// Log the user out
		logout() {
			this.$auth.logout({
				returnTo: window.location.origin
			});
		},
		load_data: async function() {
			const token = await this.$auth.getTokenSilently();
			this.$store.dispatch('a_load_groceries', token);
			this.$store.dispatch('a_load_recipes', token);
		}
	},
};
</script>
