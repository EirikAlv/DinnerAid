<template>
  <div>
    <button @click="callApi">Call</button>
    <p>{{ apiMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "external-api",
  data() {
    return {
      apiMessage: ""
    };
  },
  methods: {
    async callApi() {
      // Get the access token from the auth wrapper
      const differentAudienceOptions = {
      audience: 'https://dev-neqxom2y.us.auth0.com/api/v2/',
      scope: 'read:rules'
    };
      const token = await this.$auth.getTokenSilently(differentAudienceOptions);

      // Use Axios to make a call to the API
      const foo = `${process.env.VUE_APP_APIBASEURL}/api/external`;
      console.log(foo);
      console.log(token);
      const { data } = await axios.get(`${process.env.VUE_APP_APIBASEURL ?? ''}/api/external`, {
        headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
      });

      this.apiMessage = data;
    }
  }
};
</script>