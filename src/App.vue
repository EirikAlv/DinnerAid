<template>
<v-app>
	<div>
		<v-toolbar dark flat>
			<v-toolbar-title>Dinner aid</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn 
				v-if="$router.currentRoute.name !== 'FrontPage'"
				@click="$router.push('/')" >
				Home
			</v-btn>
			<div v-if="!$auth.loading">
				<!-- show login when not authenticated -->
				<v-btn v-if="!$auth.isAuthenticated" @click="login">Log in</v-btn>
				<!-- show logout when authenticated -->
				<v-btn v-if="$auth.isAuthenticated" @click="logout">Log out</v-btn>
			</div>
		</v-toolbar>
		<v-tabs 
			v-if="$router.currentRoute.name !== 'FrontPage'"
			centered >
			<v-tab to="/groceries">Groceries</v-tab>
			<v-tab to="/recipes">Recipes</v-tab>
		</v-tabs>

	</div>
	<div class="app-margin">
		<div v-if="$auth.isAuthenticated">
			<router-view />
		</div>
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
			this.$store.dispatch('a_load_UOM', token);
		}
	},
};
</script>
<style scoped>
.app-margin{
	margin-right: 10vw;
	margin-left: 10vw;
	margin-bottom: 100px;
}
</style>