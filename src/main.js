import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Import the Auth0 configuration
let domain = process.env.DOMAIN
let clientId = process.env.CLIENTID
if (!domain && !clientId) {
	// let config = require("../auth_config.json");
	// domain = config.domain;
	// clientId = config.clientId;
}
console.log(domain);
console.log(clientId);

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
